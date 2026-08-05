from fastapi import APIRouter
import pandas as pd

from backend.services.model_loader import next_purchase_amount_model


router = APIRouter(
    tags=["Next Purchase"]
)



# SAME FEATURE ORDER USED DURING TRAINING

FEATURES = [

    'Age',
    'Gender',
    'Income',
    'Location',
    'Membership',
    'Tenure',
    'TotalSpend',
    'TotalTransactions',
    'AverageOrderValue',
    'PurchaseFrequency',
    'LastPurchaseDays',
    'PreferredCategory',
    'WebsiteVisits',
    'AppUsageMinutes',
    'LoginFrequency',
    'WishlistCount',
    'CartAbandonmentRate',
    'EmailOpenRate',
    'MarketingClicks',
    'SatisfactionScore',
    'Rating',
    'SupportCalls',
    'Complaints',
    'Reviews',
    'CustomerHealthScore',
    'ChurnRisk',
    'DiscountUsed',
    'CouponUsed',
    'ReferralCount',
    'PaymentMethod',
    'DeviceType',
    'ReturnRate',
    'LoyaltyPoints'

]



# CATEGORY ENCODING
# Must match training encoding

CATEGORY_MAP = {


    "Gender":{
        "Female":0,
        "Male":1
    },


    "Membership":{
        "Free":0,
        "Bronze":1,
        "Silver":2,
        "Gold":3,
        "Platinum":4
    },


    "Location":{
        "California":0,
        "Texas":1,
        "New York":2,
        "Florida":3,
        "Bhopal":4
    },


    "PreferredCategory":{
        "Electronics":0,
        "Fashion":1,
        "Beauty":2,
        "Sports":3,
        "Home":4
    },


    "PaymentMethod":{
        "Card":0,
        "UPI":1,
        "Wallet":2
    },


    "DeviceType":{
        "Mobile":0,
        "Desktop":1
    }

}





@router.post("/predict")
def predict(data:dict):

    try:


        # Convert JSON to dataframe

        df = pd.DataFrame([data])



        # Encode categorical columns

        for col, mapping in CATEGORY_MAP.items():

            if col in df.columns:

                df[col] = df[col].map(mapping)




        # Create missing features

        for col in FEATURES:

            if col not in df.columns:

                df[col] = 0




        # Feature order same as training

        df = df[FEATURES]




        # Convert all values into numbers

        df = df.apply(
            pd.to_numeric,
            errors="coerce"
        )




        # Replace empty values

        df = df.fillna(0)




        # Prediction

        prediction = next_purchase_amount_model.predict(
            df.values
        )



        amount = float(prediction[0])



        return {


            "success": True,

            "Predicted Next Purchase Amount":
            round(amount,2)


        }



    except Exception as e:


        print("NEXT PURCHASE ERROR:",e)


        return {


            "success":False,

            "error":str(e)

        }