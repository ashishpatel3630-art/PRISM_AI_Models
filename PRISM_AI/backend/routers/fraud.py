from fastapi import APIRouter
import pandas as pd


from backend.services.model_loader import(
fraud_model,
fraud_scaler,
fraud_features
)


router=APIRouter(
prefix="/fraud",
tags=["Fraud"]
)



@router.post("/predict")
def predict(data:dict):


    df=pd.DataFrame(
        [data]
    )


    df=df[fraud_features]


    scaled=fraud_scaler.transform(
        df
    )


    prediction=fraud_model.predict(
        scaled
    )[0]


    probability=fraud_model.predict_proba(
        scaled
    )[0][1]


    return{


    "fraud":
    int(prediction),

    "risk_score":
    float(probability)

    }
