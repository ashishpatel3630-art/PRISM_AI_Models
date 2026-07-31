import os
import joblib

from fastapi import APIRouter

router = APIRouter(
    prefix="/recommendation",
    tags=["Recommendation"]
)

BASE_PATH = os.path.abspath(
    os.path.join(
        os.path.dirname(__file__),
        "../../models"
    )
)


if not os.path.exists(BASE_PATH):
    raise FileNotFoundError(
        f"Models folder not found: {BASE_PATH}"
    )
# ---------------- CHURN ----------------

churn_model = joblib.load(
    os.path.join(BASE_PATH, "churn_pipeline.pkl")
)


# ---------------- SEGMENTATION ----------------

segmentation_model = joblib.load(
    os.path.join(
        BASE_PATH,
        "customer_segmentation_model.pkl"
    )
)

segmentation_scaler = joblib.load(
    os.path.join(
        BASE_PATH,
        "segmentation_scaler.pkl"
    )
)

segmentation_features = joblib.load(
    os.path.join(
        BASE_PATH,
        "segmentation_features.pkl"
    )
)



# ---------------- CLV ----------------

clv_model = joblib.load(
    os.path.join(
        BASE_PATH,
        "clv_model.pkl"
    )
)

clv_features = joblib.load(
    os.path.join(
        BASE_PATH,
        "clv_features.pkl"
    )
)



# ---------------- FRAUD ----------------

fraud_model = joblib.load(
    os.path.join(
        BASE_PATH,
        "fraud_model.pkl"
    )
)

fraud_scaler = joblib.load(
    os.path.join(
        BASE_PATH,
        "fraud_scaler.pkl"
    )
)

fraud_features = joblib.load(
    os.path.join(
        BASE_PATH,
        "fraud_features.pkl"
    )
)



# ---------------- RECOMMENDATION ----------------

recommendation_similarity = joblib.load(
    os.path.join(
        BASE_PATH,
        "recommendation_similarity.pkl"
    )
)

products = joblib.load(
    os.path.join(
        BASE_PATH,
        "products.pkl"
    )
)

user_product = joblib.load(
    os.path.join(
        BASE_PATH,
        "user_product.pkl"
    )
)



# ---------------- NEXT PURCHASE ----------------

next_purchase_amount_model = joblib.load(
    os.path.join(
        BASE_PATH,
        "next_purchase_amount_model.pkl"
    )
)

next_purchase_amount_scaler = joblib.load(
    os.path.join(
        BASE_PATH,
        "next_purchase_amount_scaler.pkl"
    )
)

next_purchase_amount_features = joblib.load(
    os.path.join(
        BASE_PATH,
        "next_purchase_amount_features.pkl"
    )
)


print("All ML Models Loaded Successfully 🚀")