from fastapi import APIRouter
from typing import List

from backend.services.model_loader import clv_pipeline


router = APIRouter(
    prefix="/clv",
    tags=["CLV"]
)


@router.post("/predict")
def predict(data: List[float]):


    prediction = clv_pipeline.predict(
        [data]
    )


    return {
        "Predicted_CLV": float(prediction[0])
    }