from fastapi import HTTPException


def model_not_loaded():

    raise HTTPException(
        status_code=500,
        detail="Model not loaded"
    )


def invalid_input():

    raise HTTPException(
        status_code=400,
        detail="Invalid Input"
    )