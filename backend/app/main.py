from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from app.api.endpoints import accounts, tourists, providers, locations, plans

app = FastAPI(
    title="Da Lat Tourism API",
    description="API cho hệ thống tư vấn thông tin du lịch Đà Lạt",
    version="1.0.0"
)

#include router
app.include_router(accounts.router, prefix = "/accounts", tags = ["Accounts"])
app.include_router(tourists.router, prefix = "/tourists", tags = ["Tourists"])
app.include_router(providers.router, prefix = "/providers", tags = ["Providers"])
app.include_router(locations.router, prefix = "/locations", tags = ["Locations"])
app.include_router(plans.router, prefix = "/plans", tags = ["Plans"])

#Static files for covers image

@app.get("/") #127.0.0.1:8000
def read_root():
    """Endpoint kiểm tra trạng thái hoạt động của Server."""
    return {
        "message": "Da Lat Tourism API is running", 
        "status": "running"
    }