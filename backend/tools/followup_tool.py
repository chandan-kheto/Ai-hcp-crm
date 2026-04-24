
from agents.langgraph_agent import llm

def suggest_followup(text):
    prompt = f"Suggest follow-up actions: {text}"
    return llm.predict(prompt)
