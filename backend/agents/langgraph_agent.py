
from langchain_openai import ChatOpenAI
from langchain.schema import HumanMessage
import os
import json
from dotenv import load_dotenv

load_dotenv()

llm = ChatOpenAI(
    openai_api_base="https://api.groq.com/openai/v1",
    openai_api_key=os.getenv("GROQ_API_KEY"),
    model="llama-3.3-70b-versatile"
)

def extract_data(user_input):
    prompt = f"""
    Extract structured data from the following text.

    Text: "{user_input}"

    STRICT RULES:
    - Return ONLY JSON
    - No backticks
    - No explanation

    Format:
    {{
      "hcp_name": "",
      "topics": "",
      "sentiment": ""
    }}
    """

    response = llm.invoke(prompt)
    raw_output = response.content.strip()

    print("RAW LLM OUTPUT:", raw_output)

    # 🔥 REMOVE MARKDOWN BACKTICKS
    if "```" in raw_output:
        raw_output = raw_output.replace("```json", "").replace("```", "").strip()

    # 🔥 PARSE JSON
    try:
        return json.loads(raw_output)
    except:
        return {
            "error": "Still failed",
            "raw": raw_output
        }