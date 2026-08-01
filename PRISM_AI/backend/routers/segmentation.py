from fastapi import APIRouter, HTTPException
import pandas as pd

from backend.services.model_loader import (
    segmentation_model,
    segmentation_scaler
)


router = APIRouter()


SEGMENT_FEATURES = [

    "Income",
    "TotalSpend",
    "TotalTransactions",
    "AverageOrderValue",
    "PurchaseFrequency",
    "LastPurchaseDays",
    "WebsiteVisits",
    "AppUsageMinutes",
    "LoginFrequency",
    "CustomerHealthScore",
    "SatisfactionScore",
    "SupportCalls",
    "Complaints"

]



@router.post("/predict")
def predict(data: dict):

    try:

        print("\n========== SEGMENT INPUT ==========")
        print(data)


        # dataframe

        df = pd.DataFrame([data])



        # missing columns

        for col in SEGMENT_FEATURES:

            if col not in df.columns:

                df[col] = 0



        # IMPORTANT
        # same order as training

        df = df[SEGMENT_FEATURES]



        # convert numeric

        for col in SEGMENT_FEATURES:

            df[col] = pd.to_numeric(
                df[col],
                errors="coerce"
            )



        df.fillna(
            0,
            inplace=True
        )



        print("\n========== MODEL INPUT ==========")

        print(df)

        print(df.dtypes)



        # scaling

        scaled = segmentation_scaler.transform(
            df
        )



        # prediction

        prediction = segmentation_model.predict(
            scaled
        )[0]



        segment_names = {

            0: "Enterprise Champions",

            1: "Loyal Power Users",

            2: "At Risk Customers",

            3: "New Customers"

        }



        return {


            "segment": int(prediction),


            "segment_name":
            segment_names.get(
                int(prediction),
                "Unknown"
            )

        }



    except Exception as e:


        print("\n========== ERROR ==========")

        print(e)


        raise HTTPException(

            status_code=500,

            detail=str(e)

        )