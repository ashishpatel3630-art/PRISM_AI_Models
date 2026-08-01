from fastapi import APIRouter
import pandas as pd

from backend.services.model_loader import fraud_model


router = APIRouter(
    tags=["Fraud"]
)


MODEL_FEATURES = [
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


@router.post("/predict")
def predict(data:dict):

    df = pd.DataFrame([data])


    for col in MODEL_FEATURES:
        if col not in df.columns:
            df[col] = 0


    df = df[MODEL_FEATURES]


    prediction = fraud_model.predict(df)

    probability = fraud_model.predict_proba(df)


    return {

        "Fraud Prediction": int(prediction[0]),

        "Fraud Probability": round(
            float(probability[0][1]),
            4
        ),

        "Risk":
        "High" if probability[0][1] > 0.7 else "Low"

    }