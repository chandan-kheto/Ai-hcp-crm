

def get_history():
    cursor.execute("SELECT * FROM interactions")
    return cursor.fetchall()