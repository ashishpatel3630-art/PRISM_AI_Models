from fastapi import APIRouter

router = APIRouter()


@router.get("/")
def revenue_forecast():

    data = [
        {
            "month":"Jan",
            "revenue":120000
        },
        {
            "month":"Feb",
            "revenue":150000
        },
        {
            "month":"Mar",
            "revenue":180000
        },
        {
            "month":"Apr",
            "revenue":220000
        },
        {
            "month":"May",
            "revenue":260000
        }
    ]

    return data