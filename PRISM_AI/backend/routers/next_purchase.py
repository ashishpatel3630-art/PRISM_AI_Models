from fastapi import APIRouter
import pandas as pd

from backend.services.model_loader import next_purchase_amount_model


router = APIRouter(
    prefix="/next-purchase",
    tags=["Next Purchase"]
)


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


# same encoding used during training

CATEGORY_MAP = {

"Gender":{
"Male":1,
"Female":0
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
"New York":2
},


"PreferredCategory":{
"Electronics":0,
"Fashion":1,
"Home":2,
"Beauty":3
},


"PaymentMethod":{
"Credit Card":0,
"Debit Card":1,
"UPI":2
},


"DeviceType":{
"Mobile":0,
"Desktop":1
}

}



@router.post("/predict")
def predict(data:dict):


    df=pd.DataFrame([data])


    # categorical encoding

    for col,mapping in CATEGORY_MAP.items():

        if col in df.columns:

            df[col]=df[col].map(mapping)



    # missing columns

    for col in FEATURES:

        if col not in df.columns:

            df[col]=0



    # order

    df=df[FEATURES]



    prediction = next_purchase_amount_model.predict(df)



    return {


    "Predicted Next Purchase Amount":
    round(float(prediction[0]),2)


    }