
from pydantic import BaseModel
from typing import Optional

class Interaction(BaseModel):
    hcp_name: Optional[str] = None
    interaction_type: Optional[str] = None
    date: Optional[str] = None
    time: Optional[str] = None
    topics: Optional[str] = None
    materials: Optional[str] = None
    samples: Optional[str] = None
    sentiment: Optional[str] = None
    outcome: Optional[str] = None
    follow_up: Optional[str] = None