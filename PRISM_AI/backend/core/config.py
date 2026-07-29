from pydantic_settings import BaseSettings


class Settings(BaseSettings):

    APP_NAME = "PRISM AI"

    VERSION = "1.0.0"

    API_PREFIX = "/api/v1"

    SECRET_KEY = "CHANGE_ME"

    class Config:
        env_file = ".env"


settings = Settings()