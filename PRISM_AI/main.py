from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from backend.middleware.logging import LoggingMiddleware

from backend.routers import (
    churn,
    clv,
    fraud,
    segmentation,
    next_purchase,
    dashboard,
    revenue,
    risk,
    segment,
    insights,
    auth
)


app = FastAPI(
    title="PRISM AI API",
    version="1.0.0"
)


# CORS

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5174",
        "http://localhost:3000"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


app.add_middleware(
    LoggingMiddleware
)


# =====================
# AUTH
# =====================

app.include_router(
    auth.router
)


# =====================
# ML MODELS
# =====================

app.include_router(
    churn.router,
    prefix="/api/churn",
    tags=["Churn Prediction"]
)


app.include_router(
    segmentation.router,
    prefix="/api/segmentation",
    tags=["Segmentation"]
)


app.include_router(
    clv.router,
    prefix="/api/clv",
    tags=["CLV"]
)


app.include_router(
    fraud.router,
    prefix="/api/fraud",
    tags=["Fraud"]
)


app.include_router(
    next_purchase.router,
    prefix="/api/next-purchase",
    tags=["Next Purchase"]
)



# =====================
# DASHBOARD
# =====================

app.include_router(
    dashboard.router,
    prefix="/api/dashboard",
    tags=["Dashboard"]
)


app.include_router(
    revenue.router,
    prefix="/api/revenue",
    tags=["Revenue"]
)


app.include_router(
    risk.router,
    prefix="/api/risk",
    tags=["Risk"]
)


app.include_router(
    segment.router,
    prefix="/api/segment",
    tags=["Segment"]
)


app.include_router(
    insights.router,
    prefix="/api/insights",
    tags=["Insights"]
)

@app.get("/")
def home():
    return {
        "message":"PRISM AI Backend Running 🚀"
    }