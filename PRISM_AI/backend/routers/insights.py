from fastapi import APIRouter

router = APIRouter()


@router.get("/api/dashboard/insights")
def get_insights():

    return [
        {
            "icon": "⚡",
            "title": "High Churn Risk",
            "message": "245 enterprise customers showed a drop in activity."
        },
        {
            "icon": "💎",
            "title": "Upsell Opportunity",
            "message": "Offer premium plan to top 112 loyal users."
        }
    ]