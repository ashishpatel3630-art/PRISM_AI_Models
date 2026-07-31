from fastapi import APIRouter


router = APIRouter()


@router.get("/")
def dashboard():

    return {

        "customers":50000,

        "health":84,

        "risk":2450,

        "revenue":12.5

    }