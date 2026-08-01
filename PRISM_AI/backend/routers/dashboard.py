from fastapi import APIRouter


router = APIRouter()


from backend.auth.dependencies import get_current_user
from fastapi import Depends


@router.get("/dashboard")
def dashboard(
    current_user = Depends(get_current_user)
):

    return {
        "message":"Dashboard Access Granted",
        "user":current_user
    }
