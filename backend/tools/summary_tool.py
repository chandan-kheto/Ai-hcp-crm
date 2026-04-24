
from agents.langgraph_agent import llm

def summarize(text):
    prompt = f"Summarize this interaction: {text}"
    return llm.predict(prompt)