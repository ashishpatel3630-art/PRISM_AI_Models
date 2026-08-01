from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from backend.middleware.logging import LoggingMiddleware
from backend.routers import segment
from backend.routers import (
    churn,
    clv,
    fraud,
    segmentation,
    next_purchase,
    # recommendation
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
        "http://localhost:5174"
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
    prefix="/api/fraud"
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
    
from fastapi.middleware.cors import CORSMiddleware


app.add_middleware(

    CORSMiddleware,

    allow_origins=[
        "http://localhost:5174"
    ],

    allow_credentials=True,

    allow_methods=["*"],

    allow_headers=["*"],

)

from backend.routers import dashboard


app.include_router(
    dashboard.router,
    prefix="/api/dashboard"
)

from backend.routers import (
    dashboard,
    revenue,
    segmentation,
    risk
)



app.include_router(
    dashboard.router,
    prefix="/api/dashboard"
)


app.include_router(
    revenue.router,
    prefix="/api/revenue"
)



app.include_router(
    risk.router,
    prefix="/api/risk"
)

app.include_router(
    segment.router,
    prefix="/api"
)

from backend.routers import insights

app.include_router(
    insights.router,
    prefix="/api"
)
