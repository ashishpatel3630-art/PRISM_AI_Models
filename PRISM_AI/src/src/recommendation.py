import joblib


products = joblib.load(
    "models/products.pkl"
)

similarity_matrix = joblib.load(
    "models/recommendation_similarity.pkl"
)



def recommend_products(product_name, n=5):

    index = products[
        products["ProductName"] == product_name
    ].index[0]


    scores = list(
        enumerate(
            similarity_matrix[index]
        )
    )


    scores = sorted(
        scores,
        key=lambda x:x[1],
        reverse=True
    )


    result = []

    for i,score in scores[1:n+1]:

        result.append({

            "Product":
            products.iloc[i]["ProductName"],

            "Brand":
            products.iloc[i]["Brand"],

            "Category":
            products.iloc[i]["Category"],

            "Price":
            products.iloc[i]["Price"],

            "Rating":
            products.iloc[i]["Rating"],

            "Similarity":
            round(score,3)

        })


    return result