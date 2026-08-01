from fastapi import APIRouter


router = APIRouter()



@router.get("/api/dashboard/risk")
def risk():

    return [

        {
            "risk":"Low",
            "count":35000
        },

        {
            "risk":"Medium",
            "count":10000
        },

        {
            "risk":"High",
            "count":5000
        }

    ]