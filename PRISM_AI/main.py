from fastapi import FastAPI

from backend.middleware.logging import LoggingMiddleware
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI(
    title="PRISM AI API"
)


app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
from backend.routers import (
    churn,
    segmentation,
    clv,
    fraud,
    recommendation,
    next_purchase,
)




# Middleware

app.add_middleware(
    LoggingMiddleware
)


# Routers



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
    
    
    app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)