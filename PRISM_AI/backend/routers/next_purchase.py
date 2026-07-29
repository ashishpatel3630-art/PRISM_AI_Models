from fastapi import APIRouter
import pandas as pd

from backend.services.model_loader import (
    next_purchase_amount_model,
    next_purchase_amount_scaler,
    next_purchase_amount_features
)


router = APIRouter(
    prefix="/next-purchase",
    tags=["Next Purchase"]
)



@router.post("/predict")
def predict_next_purchase(data:dict):


    df = pd.DataFrame([data])


    df = df[next_purchase_amount_features]


    scaled = next_purchase_amount_scaler.transform(df)


    prediction = next_purchase_amount_model.predict(
        scaled
    )[0]


    return {

        "predicted_next_purchase_amount":
        round(float(prediction),2)

    }