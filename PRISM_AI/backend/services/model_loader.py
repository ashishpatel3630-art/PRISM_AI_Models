import joblib
import os


BASE_PATH = "../models"



segmentation_model = joblib.load(
    os.path.join(BASE_PATH,
    "/Users/aashishmewada/Desktop/PRISM AI/PRISM_AI/models/customer_segmentation_model.pkl")
)


segmentation_scaler = joblib.load(
    os.path.join(BASE_PATH,
    "/Users/aashishmewada/Desktop/PRISM AI/PRISM_AI/models/segmentation_scaler.pkl")
)



# Churn

churn_model = joblib.load(
    os.path.join(BASE_PATH,
    "/Users/aashishmewada/Desktop/PRISM AI/PRISM_AI/models/churn_model.pkl")
)


churn_scaler = joblib.load(
    os.path.join(BASE_PATH,
    "/Users/aashishmewada/Desktop/PRISM AI/PRISM_AI/models/churn_scaler.pkl")
)


churn_features = joblib.load(
    os.path.join(BASE_PATH,
    "/Users/aashishmewada/Desktop/PRISM AI/PRISM_AI/models/churn_features.pkl")
)



clv_model = joblib.load(
    os.path.join(BASE_PATH,
    "/Users/aashishmewada/Desktop/PRISM AI/PRISM_AI/models/clv_model.pkl")
)


clv_features = joblib.load(
    os.path.join(BASE_PATH,
    "/Users/aashishmewada/Desktop/PRISM AI/PRISM_AI/models/clv_features.pkl")
)



# Next Purchase

purchase_model = joblib.load(
    os.path.join(BASE_PATH,
    "next_purchase_amount_model.pkl")
)


purchase_scaler = joblib.load(
    os.path.join(BASE_PATH,
    "next_purchase_amount_scaler.pkl")
)


purchase_features = joblib.load(
    os.path.join(BASE_PATH,
    "next_purchase_amount_features.pkl")
)



# Fraud

fraud_model = joblib.load(
    os.path.join(BASE_PATH,
    "fraud_model.pkl")
)


fraud_scaler = joblib.load(
    os.path.join(BASE_PATH,
    "fraud_scaler.pkl")
)


fraud_features = joblib.load(
    os.path.join(BASE_PATH,
    "fraud_features.pkl")
)



# Recommendation

products = joblib.load(
    os.path.join(BASE_PATH,
    "products.pkl")
)


vectorizer = joblib.load(
    os.path.join(BASE_PATH,
    "tfidf_vectorizer.pkl")
)


similarity = joblib.load(
    os.path.join(BASE_PATH,
    "recommendation_similarity.pkl")
)
