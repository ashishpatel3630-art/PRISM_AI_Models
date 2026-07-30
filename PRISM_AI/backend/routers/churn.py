from fastapi import APIRouter
import pandas as pd

from backend.services.model_loader import churn_model


router = APIRouter(
    prefix="/churn",
    tags=["Churn Prediction"]
)



@router.post("/predict")
def predict(data:dict):


    df = pd.DataFrame(
        [data]
    )


    prediction = churn_model.predict(
        df
    )[0]


    probability = churn_model.predict_proba(
        df
    )[0][1]


    return {

        "prediction": int(prediction),

        "churn_probability": float(probability)

    }