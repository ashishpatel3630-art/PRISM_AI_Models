from fastapi import APIRouter
import pandas as pd

from backend.services.model_loader import churn_model


router = APIRouter(
    prefix="/api/churn",
    tags=["Churn Prediction"]
)


@router.post("/predict")
def predict(data: dict):

    df = pd.DataFrame([data])


    prediction = churn_model.predict(df)[0]


    probability = churn_model.predict_proba(df)[0][1]


    return {

        "prediction": (prediction),

        "churn_probability":
        round((probability),3),

        "status":
        "Will Churn" if prediction==1 else "Safe Customer"
    }
from fastapi import APIRouter

router = APIRouter()


@router.post("/churn/predict")
def predict_churn(data:dict):

    return {
        "churn_probability":75,
        "risk":"High Risk"
    }