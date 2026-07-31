from fastapi import APIRouter
from pydantic import BaseModel
import numpy as np

from backend.services.model_loader import (
    segmentation_model,
    segmentation_scaler
)


router = APIRouter(
    tags=["Segmentation"]
)


class SegmentationInput(BaseModel):

    features: list[float]


@router.post("/predict")
def predict(data: SegmentationInput):

    values = np.array(
        [data.features]
    )


    scaled = segmentation_scaler.transform(
        values
    )


    result = segmentation_model.predict(
        scaled
    )


    return {
        "segment": int(result[0])
    }