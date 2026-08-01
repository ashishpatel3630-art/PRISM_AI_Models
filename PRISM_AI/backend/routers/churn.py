from fastapi import APIRouter, HTTPException
import pandas as pd
import traceback

from backend.services.model_loader import churn_model


router = APIRouter()


# ===============================
# Required Model Features
# ===============================

allowed_columns = [

    "Age",
    "Gender",
    "Income",
    "Location",
    "Membership",
    "Tenure",
    "TotalSpend",
    "TotalTransactions",
    "AverageOrderValue",
    "PurchaseFrequency",
    "LastPurchaseDays",
    "PreferredCategory",
    "WebsiteVisits",
    "AppUsageMinutes",
    "LoginFrequency",
    "WishlistCount",
    "CartAbandonmentRate",
    "EmailOpenRate",
    "MarketingClicks",
    "SatisfactionScore",
    "Rating",
    "SupportCalls",
    "Complaints",
    "Reviews",
    "CustomerHealthScore"

]



# ===============================
# Numeric Columns
# ===============================

numeric_columns = [

    "Age",
    "Income",
    "Tenure",
    "TotalSpend",
    "TotalTransactions",
    "AverageOrderValue",
    "PurchaseFrequency",
    "LastPurchaseDays",
    "WebsiteVisits",
    "AppUsageMinutes",
    "LoginFrequency",
    "WishlistCount",
    "CartAbandonmentRate",
    "EmailOpenRate",
    "MarketingClicks",
    "SatisfactionScore",
    "Rating",
    "SupportCalls",
    "Complaints",
    "Reviews",
    "CustomerHealthScore"

]



# ===============================
# Categorical Columns
# ===============================

categorical_columns = [

    "Gender",
    "Location",
    "Membership",
    "PreferredCategory"

]



# ===============================
# CHURN PREDICT API
# ===============================


@router.post("/predict")
def predict(data: dict):

    try:

        print("\n========== RAW INPUT ==========")
        print(data)


        # Convert JSON to DataFrame

        df = pd.DataFrame([data])


        print("\n========== BEFORE CLEAN ==========")
        print(df)
        print(df.dtypes)



        # --------------------------------
        # Remove unwanted frontend fields
        # --------------------------------

        df = df[
            [
                col for col in allowed_columns
                if col in df.columns
            ]
        ]



        # --------------------------------
        # Add missing model columns
        # --------------------------------

        for col in allowed_columns:

            if col not in df.columns:
                df[col] = 0



        # --------------------------------
        # Replace empty strings
        # --------------------------------

        df.replace(
            "",
            None,
            inplace=True
        )



        # --------------------------------
        # Numeric conversion
        # --------------------------------

        for col in numeric_columns:

            df[col] = pd.to_numeric(
                df[col],
                errors="coerce"
            )

            df[col] = df[col].fillna(0)



        # --------------------------------
        # Categorical cleaning
        # --------------------------------

        for col in categorical_columns:

            df[col] = (
                df[col]
                .fillna("Unknown")
                .astype(str)
            )



        print("\n========== AFTER CLEAN ==========")
        print(df)
        print(df.dtypes)



        # --------------------------------
        # Prediction
        # --------------------------------

        prediction = churn_model.predict(df)[0]


        probability = churn_model.predict_proba(df)[0][1]



        print("\n========== RESULT ==========")
        print("Prediction:", prediction)
        print("Probability:", probability)



        return {

            "prediction":(prediction),

            "churn_probability":
                round(float(probability),3),

            "status":
                "Will Churn"
                if prediction == 1
                else "Safe Customer"

        }



    except Exception as e:


        print("\n========== ERROR ==========")
        print(str(e))

        traceback.print_exc()


        raise HTTPException(

            status_code=500,

            detail=str(e)

        )