from fastapi import APIRouter
import pandas as pd

from backend.services.model_loader import clv_pipeline


router = APIRouter(
    tags=["CLV"]
)


@router.post("/predict")
def predict(data: dict):

    input_df = pd.DataFrame([{

        "Income": data["Income"],
        "Tenure": data["Tenure"],
        "TotalSpend": data["TotalSpend"],
        "TotalTransactions": data["TotalTransactions"],
        "AverageOrderValue": data["AverageOrderValue"],
        "PurchaseFrequency": data["PurchaseFrequency"],
        "LastPurchaseDays": data["LastPurchaseDays"],
        "WebsiteVisits": data["WebsiteVisits"],
        "AppUsageMinutes": data["AppUsageMinutes"],
        "LoginFrequency": data["LoginFrequency"],
        "WishlistCount": data["WishlistCount"],
        "SatisfactionScore": data["SatisfactionScore"],
        "Rating": data["Rating"],
        "CustomerHealthScore": data["CustomerHealthScore"],
        "SupportCalls": data["SupportCalls"],
        "Complaints": data["Complaints"]

    }])


    prediction = clv_pipeline.predict(
        input_df
    )


    return {

        "Predicted_CLV": round(
            float(prediction[0]),
            2
        )

    }