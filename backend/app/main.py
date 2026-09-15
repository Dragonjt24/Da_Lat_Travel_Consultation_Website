from fastapi import FastAPI

app = FastAPI(
    title="Da Lat Tourism API",
    description="API cho hệ thống tư vấn thông tin du lịch Đà Lạt",
    version="1.0.0"
)


@app.get("/")
def root():
    return {
        "message": "Da Lat Tourism API is running"
    }