import os
import joblib


BASE_PATH = os.path.abspath(
    os.path.join(
        os.path.dirname(__file__),
        "../../"
    )
)


# =====================
# CHURN
# =====================

churn_model = joblib.load(
    os.path.join(BASE_PATH,"models/churn_model.pkl")
)

churn_scaler = joblib.load(
    os.path.join(BASE_PATH,"models/churn_scaler.pkl")
)

churn_features = joblib.load(
    os.path.join(BASE_PATH,"models/churn_features.pkl")
)



# =====================
# SEGMENTATION
# =====================

segmentation_model = joblib.load(
    os.path.join(BASE_PATH,"models/customer_segmentation_model.pkl")
)

segmentation_scaler = joblib.load(
    os.path.join(BASE_PATH,"models/segmentation_scaler.pkl")
)

segmentation_features = joblib.load(
    os.path.join(BASE_PATH,"models/segmentation_features.pkl")
)



# =====================
# CLV
# =====================

clv_model = joblib.load(
    os.path.join(BASE_PATH,"models/clv_model.pkl")
)

clv_features = joblib.load(
    os.path.join(BASE_PATH,"models/clv_features.pkl")
)



# =====================
# FRAUD
# =====================

fraud_model = joblib.load(
    os.path.join(BASE_PATH,"models/fraud_model.pkl")
)

fraud_scaler = joblib.load(
    os.path.join(BASE_PATH,"models/fraud_scaler.pkl")
)

fraud_features = joblib.load(
    os.path.join(BASE_PATH,"models/fraud_features.pkl")
)



# =====================
# NEXT PURCHASE
# =====================

next_purchase_model = joblib.load(
    os.path.join(
        BASE_PATH,
        "models/next_purchase_amount_model.pkl"
    )
)

next_purchase_scaler = joblib.load(
    os.path.join(
        BASE_PATH,
        "models/next_purchase_amount_scaler.pkl"
    )
)

next_purchase_features = joblib.load(
    os.path.join(
        BASE_PATH,
        "models/next_purchase_amount_features.pkl"
    )
)