from fastapi import APIRouter
import pandas as pd


from backend.services.model_loader import(
    next_purchase_amount_model,
    next_purchase_amount_scaler,
    next_purchase_amount_features
)


router=APIRouter(
prefix="/purchase",
tags=["Next Purchase"]
)



@router.post("/predict")
def predict(data:dict):


    df=pd.DataFrame(
        [data]
    )


    df=df[next_purchase_amount_features]


    scaled=next_purchase_amount_scaler.transform(
        df
    )


    result=next_purchase_amount_model.predict(
        scaled
    )[0]


    return{

        "next_purchase_amount":
        float(result)

    }
