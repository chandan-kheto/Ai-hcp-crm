
def edit_interaction(id, field, value):
    query = f"UPDATE interactions SET {field}=%s WHERE id=%s"
    cursor.execute(query, (value, id))
    conn.commit()
    return {"status": "updated"}