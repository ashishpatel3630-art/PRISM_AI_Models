from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from backend.middleware.logging import LoggingMiddleware

from backend.routers import (
    churn,
    segmentation,
    clv,
    fraud,
    recommendation,
    next_purchase,
)


app = FastAPI(
    title="PRISM AI API",
    version="1.0.0"
)


# CORS Configuration

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "http://localhost:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Custom Middleware

app.add_middleware(
    LoggingMiddleware
)


# Routers

app.include_router(
    churn.router,
    prefix="/api/churn",
    tags=["Churn Prediction"]
)

app.include_router(
    segmentation.router,
    prefix="/api/segmentation",
    tags=["Customer Segmentation"]
)

app.include_router(
    clv.router,
    prefix="/api/clv",
    tags=["Customer Lifetime Value"]
)

app.include_router(
    fraud.router,
    prefix="/api/fraud",
    tags=["Fraud Detection"]
)

app.include_router(
    recommendation.router,
    prefix="/api/recommendation",
    tags=["Recommendation Engine"]
)

app.include_router(
    next_purchase.router,
    prefix="/api/next-purchase",
    tags=["Next Purchase Prediction"]
)



@app.get("/")
def home():

    return {
        "message": "PRISM AI Backend Running 🚀"
    }