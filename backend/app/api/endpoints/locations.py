from fastapi import APIRouter

router = APIRouter()

@router.get("/")
def list_locations():
    return {"message": "List-locations do it later"}