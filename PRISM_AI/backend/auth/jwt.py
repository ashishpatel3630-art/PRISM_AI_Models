from jose import jwt, JWTError
from datetime import datetime, timedelta


SECRET_KEY = "YOUR_SECRET_KEY"
ALGORITHM = "HS256"


def create_access_token(data: dict, expires_minutes=30):

    to_encode = data.copy()

    expire = datetime.utcnow() + timedelta(
        minutes=expires_minutes
    )

    to_encode.update({
        "exp": expire
    })

    token = jwt.encode(
        to_encode,
        SECRET_KEY,
        algorithm=ALGORITHM
    )

    return token



def verify_token(token: str):

    try:

        payload = jwt.decode(
            token,
            SECRET_KEY,
            algorithms=[ALGORITHM]
        )

        return payload

    except JWTError:

        return None