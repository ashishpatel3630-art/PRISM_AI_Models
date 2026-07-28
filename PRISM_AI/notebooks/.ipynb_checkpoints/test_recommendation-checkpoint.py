import joblib
import pandas as pd
from sklearn.metrics.pairwise import cosine_similarity


products = joblib.load(
    "models/products.pkl"
)

product_vectors = joblib.load(
    "models/product_vectors.pkl"
)

vectorizer = joblib.load(
    "models/vectorizer.pkl"
)

user_product = joblib.load(
    "models/user_product.pkl"
)

customer_similarity = joblib.load(
    "models/customer_similarity.pkl"
)

print("Models Loaded ✅")