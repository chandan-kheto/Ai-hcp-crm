
from db.database import cursor, conn

def log_interaction(data):
    query = """
    INSERT INTO interactions
    (hcp_name, interaction_type, date, topics, sentiment, outcome, follow_up)
    VALUES (%s, %s, %s, %s, %s, %s, %s)
    """

    values = (
        data.get("hcp_name"),
        data.get("interaction_type"),
        data.get("date"),
        data.get("topics"),
        data.get("sentiment"),
        data.get("outcome"),
        data.get("follow_up")
    )

    cursor.execute(query, values)
    conn.commit()

    return cursor.lastrowid