import joblib
import os


BASE_PATH = os.path.join(
    os.path.dirname(__file__),
    "../../models"
)


# ======================
# CHURN

import joblib

churn_model = joblib.load(
"models/churn_pipeline.pkl"
)



# ======================
# SEGMENTATION
# ======================

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



# ======================
# CLV
# ======================

from pathlib import Path
import joblib


MODEL_DIR = Path("models")


clv_model = joblib.load(
    MODEL_DIR / "clv_model.pkl"
)


clv_pipeline = joblib.load(
    MODEL_DIR / "clv_pipeline.pkl"
)
# ======================
# FRAUD
# ======================

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



# ======================
# RECOMMENDATION
# ======================

products = joblib.load(
    os.path.join(
        BASE_PATH,
        "products.pkl"
    )
)

recommendation_similarity = joblib.load(
    os.path.join(
        BASE_PATH,
        "recommendation_similarity.pkl"
    )
)

user_product = joblib.load(
    os.path.join(
        BASE_PATH,
        "user_product.pkl"
    )
)



# ======================
# NEXT PURCHASE
# ======================

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


print("🚀 All PRISM AI Models Loaded Successfully")