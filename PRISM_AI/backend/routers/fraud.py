from fastapi import APIRouter
import numpy as np

from backend.services.model_loader import (
    fraud_model,
    fraud_scaler
)


router = APIRouter(
    prefix="/fraud",
    tags=["Fraud"]
)


from typing import List

@router.post("/predict")
def predict(data: List[float]):

    values = np.array(
        [data]
    )


    scaled = fraud_scaler.transform(
        values
    )


    prediction = fraud_model.predict(
        scaled
    )


    probability = fraud_model.predict_proba(
        scaled
    )


    return {

        "Fraud Prediction":
        int(prediction[0]),

        "Fraud Probability":
        float(probability[0][1])

    }