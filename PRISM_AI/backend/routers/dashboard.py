from fastapi import APIRouter, Depends

from backend.auth.dependencies import get_current_user


router = APIRouter()


@router.get("/")
def dashboard(
    current_user = Depends(get_current_user)
):

    return {
        "message":"Dashboard Access Granted",
        "user":current_user
    }