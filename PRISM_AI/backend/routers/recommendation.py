from fastapi import APIRouter

from services.model_loader import(
products,
similarity
)


router=APIRouter(
prefix="/recommendation",
tags=["Recommendation"]
)



@router.get("/{product_id}")
def recommend(product_id:str):


    index = products[
        products["ProductID"]==product_id
    ].index[0]


    scores=list(
        enumerate(similarity[index])
    )


    scores=sorted(
        scores,
        key=lambda x:x[1],
        reverse=True
    )


    result=[]


    for i,_ in scores[1:6]:

        result.append(
            products.iloc[i]["ProductName"]
        )


    return{

        "recommendations":
        result

    }