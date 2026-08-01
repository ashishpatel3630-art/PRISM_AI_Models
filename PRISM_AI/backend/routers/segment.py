from fastapi import APIRouter


router = APIRouter()


@router.get("/api/dashboard/segment")
def get_segment():

    return [
        {
            "segment":"Premium",
            "customers":1200
        },
        {
            "segment":"Regular",
            "customers":3500
        }
    ]