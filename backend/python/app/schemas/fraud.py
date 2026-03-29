from pydantic import BaseModel, Field


class FraudRequest(BaseModel):
    id: str
    vpa: str
    amount: float = Field(gt=0)
    channel: str


class FraudResponse(BaseModel):
    score: float
    decision: str
