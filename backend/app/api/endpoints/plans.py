from fastapi import APIRouter

router = APIRouter()

@router.get("/")
def list_plans():
    return {"message": "List-plans do it later"}