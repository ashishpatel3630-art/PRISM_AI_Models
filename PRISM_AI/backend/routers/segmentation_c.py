from fastapi import APIRouter


router = APIRouter()



@router.get("/")
def segmentation():


    return [

        {
            "segment":"Premium",
            "customers":8500
        },

        {
            "segment":"Regular",
            "customers":25000
        },

        {
            "segment":"Low Value",
            "customers":16500
        }

    ]