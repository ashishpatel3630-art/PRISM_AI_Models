from fastapi import APIRouter
import pandas as pd


from services.model_loader import (
    clv_model,
    clv_features
)



router = APIRouter(
    prefix="/clv",
    tags=["CLV"]
)



@router.post("/predict")
def predict(data:dict):


    df=pd.DataFrame(
        [data]
    )


    df=df[clv_features]


    prediction = clv_model.predict(
        df
    )[0]


    return {

        "Customer_Lifetime_Value":
        float(prediction)

    }
