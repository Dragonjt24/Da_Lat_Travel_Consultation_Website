from pydantic import BaseModel, SettingsConfigDict

class Settings(BaseModel):
    PROJECT_NAME: str = "DaLat Travel API"

    DATABASE_URL: str = (
        "postgresql+psycopg2://postgres:160405@localhost:5432/dalat_travel"
    )

    model_config = SettingsConfigDict(
        env_file=".env",
        env_file_encoding="utf-8",
        case_sensitive=True,
        extra="ignore",
    )

settings = Settings()