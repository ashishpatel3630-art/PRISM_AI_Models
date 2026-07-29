from fastapi import FastAPI

from backend.middleware.logging import LoggingMiddleware

from backend.routers import (
    auth,
    churn,
    segmentation,
    clv,
    fraud,
    recommendation,
    next_purchase,
)


app = FastAPI(
    title="PRISM AI",
    version="1.0.0"
)


# Middleware

app.add_middleware(
    LoggingMiddleware
)


# Routers

app.include_router(auth.router)

app.include_router(churn.router)

app.include_router(segmentation.router)

app.include_router(clv.router)

app.include_router(fraud.router)

app.include_router(recommendation.router)

app.include_router(next_purchase.router)



@app.get("/")
def home():

    return {
        "message": "PRISM AI Backend Running"
    }