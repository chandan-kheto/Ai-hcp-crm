
from dotenv import load_dotenv
from pathlib import Path
import os
import mysql.connector

env_path = Path(__file__).resolve().parent.parent / ".env"

# 🔥 THIS IS THE REAL FIX
load_dotenv(dotenv_path=env_path, override=True)

print("ENV PATH:", env_path)
print("DB_USER:", os.getenv("DB_USER"))

conn = mysql.connector.connect(
    host=os.getenv("DB_HOST"),
    user=os.getenv("DB_USER"),
    password=os.getenv("DB_PASSWORD"),
    database=os.getenv("DB_NAME")
)

cursor = conn.cursor(dictionary=True)