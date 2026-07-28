from fastapi import APIRouter
import pandas as pd


from services.model_loader import(
purchase_model,
purchase_scaler,
purchase_features
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


    df=df[purchase_features]


    scaled=purchase_scaler.transform(
        df
    )


    result=purchase_model.predict(
        scaled
    )[0]


    return{

        "next_purchase_amount":
        float(result)

    }
