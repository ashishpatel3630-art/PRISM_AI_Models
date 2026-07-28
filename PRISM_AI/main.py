from fastapi import FastAPI

from backend.routers import (
    churn,
    clv,
    fraud,
    next_purchase,
    recommendation,
    segmentation
)


app = FastAPI(
    title="PRISM AI Platform",
    description="AI Customer Intelligence Platform",
    version="1.0"
)



@app.get("/")
def home():

    return {
        "message":"PRISM AI API Running 🚀",
        "models":[
            "Churn Prediction",
            "Customer Lifetime Value",
            "Fraud Detection",
            "Next Purchase Amount",
            "Recommendation Engine",
            "Customer Segmentation"
        ]
    }



app.include_router(
    churn.router,
    prefix="/churn",
    tags=["Churn"]
)


app.include_router(
    clv.router,
    prefix="/clv",
    tags=["Customer Lifetime Value"]
)



app.include_router(
    fraud.router,
    prefix="/fraud",
    tags=["Fraud Detection"]
)



app.include_router(
    next_purchase.router,
    prefix="/purchase",
    tags=["Next Purchase"]
)



app.include_router(
    recommendation.router,
    prefix="/recommendation",
    tags=["Recommendation"]
)



app.include_router(
    segmentation.router,
    prefix="/segmentation",
    tags=["Segmentation"]
)