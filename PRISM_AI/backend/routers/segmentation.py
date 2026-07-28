from fastapi import APIRouter
import numpy as np

from services.model_loader import (
    segmentation_model,
    segmentation_scaler
)


router = APIRouter(
    prefix="/segmentation",
    tags=["Segmentation"]
)



@router.post("/predict")
def predict(data:list):


    values = np.array(
        [data]
    )


    scaled = segmentation_scaler.transform(
        values
    )


    result = segmentation_model.predict(
        scaled
    )


    return {

        "segment":
        int(result[0])

    }
