from fastapi import APIRouter
from app.schemas.fraud import FraudRequest, FraudResponse
from app.services.scorer import score_transaction

router = APIRouter()


@router.get('/health')
def health() -> dict[str, str]:
    return {"status": "ok"}


@router.post('/fraud-check', response_model=FraudResponse)
def fraud_check(payload: FraudRequest) -> FraudResponse:
    score = score_transaction(amount=payload.amount, channel=payload.channel)
    decision = "ALLOW" if score < 80 else "BLOCK"
    return FraudResponse(score=score, decision=decision)
