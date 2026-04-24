
from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI
from pydantic import BaseModel
from agents.langgraph_agent import extract_data
from models.interaction_model import Interaction
from tools.log_tool import log_interaction
from app.interaction_routes import router as interaction_router

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # 🔥 allow all (for now)
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# include routes
app.include_router(interaction_router)

class ChatRequest(BaseModel):
    message: str

@app.post("/ai-chat")
def ai_chat(req: ChatRequest):
    data = extract_data(req.message)
    return data

@app.post("/log-interaction")
def save(data: Interaction):
    # data is a Pydantic model → convert to dict
    result = log_interaction(data.model_dump())
    return {"message": "Saved successfully", "id": result}
