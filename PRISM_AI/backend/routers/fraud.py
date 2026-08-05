from fastapi import APIRouter
import pandas as pd

from backend.services.model_loader import fraud_model


router = APIRouter(
    tags=["Fraud Detection"]
)


FEATURES = [

'Age',
'Gender',
'Income',
'Location',
'AccountAgeDays',
'Membership',
'ProductID',
'Category',
'Quantity',
'Price',
'TotalAmount',
'PaymentMethod',
'CardType',
'TransactionChannel',
'DeviceType',
'Browser',
'IPAddress',
'PreviousTransactionCount',
'AverageTransactionAmount',
'TransactionFrequency',
'TimeSinceLastTransaction',
'FailedLoginAttempts',
'PasswordChangeCount',
'NewDeviceLogin',
'IsInternational',
'DistanceFromHome',
'CustomerTotalSpend',
'CustomerAverageSpend',
'CustomerComplaints',
'CustomerRating',
'CustomerHealthScore',
'RefundCount',
'ChargebackCount',
'SuspiciousActivityCount',
'TransactionMonth',
'TransactionDay',
'TransactionHour'

]


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
    "New York":2,
    "Bhopal":3
},


"Category":{
    "Electronics":0,
    "Fashion":1,
    "Home":2,
    "Beauty":3
},


"PaymentMethod":{
    "Credit Card":0,
    "Debit Card":1,
    "UPI":2,
    "Card":3
},


"CardType":{
    "Visa":0,
    "MasterCard":1,
    "Rupay":2
},


"TransactionChannel":{
    "Online":0,
    "Offline":1
},


"DeviceType":{
    "Mobile":0,
    "Desktop":1
},


"Browser":{
    "Chrome":0,
    "Safari":1,
    "Firefox":2
}

}



@router.post("/predict")
def predict(data:dict):


    df = pd.DataFrame([data])


    # encoding

    for col,mapping in CATEGORY_MAP.items():

        if col in df.columns:
            df[col] = df[col].map(mapping)



    # add missing features

    for col in FEATURES:

        if col not in df.columns:
            df[col] = 0



    # fill unknown

    df = df.fillna(0)



    # feature order

    df = df[FEATURES]



    print("================")
    print("INPUT TO MODEL")
    print(df)
    print(df.shape)
    print("================")



    prediction = fraud_model.predict(df)



    probability = None


    if hasattr(fraud_model,"predict_proba"):

        probability = fraud_model.predict_proba(df)[0][1]



    return {

        "Fraud Prediction": int(prediction[0]),

        "Risk Level":
        "High Risk" if int(prediction[0])==1
        else "Safe",

        "Fraud Probability":
        round(float(probability)*100,2)
        if probability is not None
        else None

    }