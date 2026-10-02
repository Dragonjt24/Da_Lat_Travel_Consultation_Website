from fastapi import APIRouter

router = APIRouter()

@router.get("/")
def list_tourists():
    return {"message": "List-tourists do it later"}