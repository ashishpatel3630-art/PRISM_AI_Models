from fastapi import APIRouter, HTTPException
from pydantic import BaseModel

from backend.auth.jwt import create_access_token
from backend.auth.password import verify_password
from backend.auth.users import users


router = APIRouter(
    prefix="/auth",
    tags=["Authentication"]
)


class LoginRequest(BaseModel):

    email:str
    password:str



@router.post("/login")
def login(data:LoginRequest):


    user = next(
        (
            u for u in users 
            if u["email"]==data.email
        ),
        None
    )


    if not user:

        raise HTTPException(
            status_code=401,
            detail="Invalid Credentials"
        )


    token = create_access_token(
        {
            "sub":user["email"],
            "role":user["role"]
        }
    )


    return {

        "access_token":token,
        "token_type":"bearer",
        "user":{
            "email":user["email"],
            "role":user["role"]
        }

    }