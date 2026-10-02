from fastapi import APIRouter

router = APIRouter()

@router.get("/")
def list_admin():
    return {"message": "List-admin do it later"}