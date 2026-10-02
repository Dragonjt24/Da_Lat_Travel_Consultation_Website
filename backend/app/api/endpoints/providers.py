from fastapi import APIRouter

router = APIRouter()

@router.get("/")
def list_providers():
    return {"message": "List-providers do it later"}