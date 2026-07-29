from fastapi import APIRouter
import pandas as pd

from backend.services.model_loader import (
    next_purchase_amount_model,
    next_purchase_amount_scaler,
    next_purchase_amount_features
)


router = APIRouter(
    prefix="/next_purchase",
    tags=["Next Purchase"]
)



@router.post("/predict")
def predict(data:dict):

    df = pd.DataFrame([data])


    df = df[
        next_purchase_amount_features
    ]


    scaled = next_purchase_amount_scaler.transform(
        df
    )


    amount = next_purchase_amount_model.predict(
        scaled
    )[0]


    return {

        "customer": data.get(
            "customer",
            "Unknown"
        ),

        "next_purchase_amount":float(amount),

        "status":"Prediction Generated"

    }




@router.get("/")
def next_purchase_dashboard():

    return [

        {
        "customer":"Acme Corp",
        "product":"Enterprise Security Add-On",
        "likelihood":94,
        "expectedDate":"In 4 Days",
        "dealValue":"$12000"
        },


        {
        "customer":"Fintech Labs",
        "product":"API Rate Limit Tier",
        "likelihood":88,
        "expectedDate":"In 9 Days",
        "dealValue":"$4500"
        },


        {
        "customer":"DataFlow Inc",
        "product":"Custom SLA Expansion",
        "likelihood":82,
        "expectedDate":"In 12 Days",
        "dealValue":"$8000"
        }

    ]