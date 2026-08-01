import joblib
from pathlib import Path


# ======================
# BASE PATH
# ======================

BASE_PATH = Path(__file__).resolve().parent.parent.parent

MODEL_DIR = BASE_PATH / "models"


# ======================
# CHURN MODEL
# ======================

churn_model = joblib.load(
    MODEL_DIR / "churn_pipeline.pkl"
)

print("Churn Model Loaded ✅")



# ======================
# SEGMENTATION
# ======================

segmentation_model = joblib.load(
    MODEL_DIR / "customer_segmentation_model.pkl"
)


segmentation_scaler = joblib.load(
    MODEL_DIR / "segmentation_scaler.pkl"
)


segmentation_features = joblib.load(
    MODEL_DIR / "segmentation_features.pkl"
)



# ======================
# CLV
# ======================

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
    MODEL_DIR / "fraud_model.pkl"
)


fraud_scaler = joblib.load(
    MODEL_DIR / "fraud_scaler.pkl"
)


fraud_features = joblib.load(
    MODEL_DIR / "fraud_features.pkl"
)



# ======================
# NEXT PURCHASE
# ======================

next_purchase_amount_model = joblib.load(
    MODEL_DIR / "next_purchase_amount_model.pkl"
)


next_purchase_amount_scaler = joblib.load(
    MODEL_DIR / "next_purchase_amount_scaler.pkl"
)


next_purchase_amount_features = joblib.load(
    MODEL_DIR / "next_purchase_amount_features.pkl"
)



print("All Models Loaded Successfully 🚀")