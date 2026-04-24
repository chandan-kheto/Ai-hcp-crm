# 🤖 AI-Powered HCP Interaction CRM

An intelligent CRM system that converts natural language interaction notes into structured data using LLMs. Built with a full-stack architecture combining React, FastAPI, and MySQL.

---

## 🚀 Features

* 💬 **AI Chat Assistant**

  * Enter interaction notes in natural language
  * Automatically extracts HCP name, topics, and sentiment

* 🧠 **LLM Integration**

  * Uses LLM (Groq / LLaMA via LangChain) for structured data extraction

* 📝 **Auto Form Filling**

  * Extracted data is auto-filled into CRM form fields

* 💾 **Database Storage**

  * Saves interactions in MySQL database

* 📊 **Interaction History**

  * Displays recent interactions with sentiment and timestamp

* ⚡ **Real-Time Workflow**

  * Chat → AI → Form → Save → History

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Tailwind CSS

### Backend

* FastAPI (Python)
* LangChain
* LLM API (Groq / LLaMA)

### Database

* MySQL

---

## 🧠 How It Works

1. User enters interaction details in chat
2. LLM processes and extracts structured data
3. Data is auto-filled into the form
4. User saves interaction
5. Data is stored in MySQL
6. History updates in real-time

---

## 📸 Demo Workflow

```text
User Input → AI Extraction → Form Auto-Fill → Save → Database → History UI
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/ai-hcp-crm.git
cd ai-hcp-crm
```

---

### 2️⃣ Backend Setup

```bash
cd backend
python -m venv venv
venv\Scripts\activate   # Windows
pip install -r requirements.txt
```

Create `.env` file:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=crm_db
GROQ_API_KEY=your_api_key
```

Run backend:

```bash
uvicorn app.main:app --reload
```

---

### 3️⃣ Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

## 🧪 Example Input

```text
Met Dr. Sharma, discussed diabetes medication, doctor showed positive interest
```

---

## 📌 Output

* HCP Name: Dr. Sharma
* Topics: diabetes medication
* Sentiment: positive

---

## 🎯 Use Cases

* Pharma sales representatives
* Healthcare CRM automation
* AI-powered data entry systems

---

## 💡 Future Improvements

* Edit/Delete interactions
* Advanced filtering & search
* Authentication system
* Deployment (Vercel + Render)

---

## 👨‍💻 Author

Chandan Kheto

---

## ⭐ If you like this project

Give it a star ⭐ on GitHub!
