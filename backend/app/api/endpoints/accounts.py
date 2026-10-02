from fastapi import APIRouter

router = APIRouter()

@router.get("/")
def list_accounts():
    return {"message": "List-accounts do it later"}