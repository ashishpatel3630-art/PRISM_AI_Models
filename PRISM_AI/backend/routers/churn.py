from fastapi import APIRouter
import pandas as pd



from backend.services.model_loader import (
    churn_model,
    churn_scaler,
    churn_features
)
from fastapi import APIRouter


router = APIRouter(
    prefix="/churn",
    tags=["Churn"]
)



@router.post("/predict")
def predict(data:dict):


    df = pd.DataFrame(
        [data]
    )


    df=df[churn_features]


    scaled = churn_scaler.transform(
        df
    )


    prediction = churn_model.predict(
        scaled
    )[0]


    probability = churn_model.predict_proba(
        scaled
    )[0][1]


    return {

        "prediction":
        int(prediction),

        "probability":
        float(probability)

    }
