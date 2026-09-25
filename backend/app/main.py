from fastapi import FastAPI

app = FastAPI(
    title="Da Lat Tourism API",
    description="API cho hệ thống tư vấn thông tin du lịch Đà Lạt",
    version="1.0.0"
)


@app.get("/", tags=["Root"])
def root():
    """Endpoint kiểm tra trạng thái hoạt động của Server."""
    return {
        "message": "Da Lat Tourism API is running", 
        "status": "running"
    }