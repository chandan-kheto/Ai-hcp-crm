
from fastapi import APIRouter
from db.database import cursor

router = APIRouter()

@router.get("/interactions")
def get_interactions():
    cursor.execute("""
        SELECT id, hcp_name, topics, sentiment, date
        FROM interactions
        ORDER BY id DESC
        LIMIT 10
    """)
    data = cursor.fetchall()
    return data