
import { useState } from "react";
import { sendToAI } from "../services/api";
import { useEffect, useRef } from "react";

function ChatAssistant({ setFormData }) {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const chatEndRef = useRef(null);

  // 🔥 Auto scroll to bottom
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async () => {
    if (!message.trim()) return;

    // User bubble
    setMessages((prev) => [
      ...prev,
      { type: "user", text: message }

    ]);

    setLoading(true);

    try {
      const res = await sendToAI(message);

      // AI success-style message (like your screenshot)
      const aiText = `**Interaction logged successfully!**

The details (HCP Name, Topics, Sentiment) have been populated.

• HCP: ${res.data.hcp_name}
• Topic: ${res.data.topics}
• Sentiment: ${res.data.sentiment}

Would you like to add a follow-up action (e.g., schedule a meeting)?`;

      setMessages((prev) => [
        ...prev,
        { type: "ai", text: aiText }
      ]);

      // Auto-fill form
      setFormData((prev) => ({
        ...prev,
        hcp_name: res.data.hcp_name || "",
        topics: res.data.topics || "",
        sentiment: res.data.sentiment || ""
      }));

      setMessage("");

    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        { type: "ai_error", text: "⚠️ Something went wrong. Please try again." }
      ]);
    }
  };

  return (
    <div className="flex flex-col h-full bg-gray-50 p-4">

      {/* Header */}
      <div className="flex items-center gap-2 mb-2">
        <span className="text-3xl">🤖</span>
        <h2 className=" text-3xl font-semibold text-gray-800">AI Assistant</h2>
      </div>
      <p className="text-1xl text-gray-500 mb-3">
        Log interaction details here via chat
      </p>

      {/* Hint card */}
      <div className="bg-blue-50 text-blue-800 text-sm p-3 rounded-lg mb-3 border border-blue-100">
        Log interaction details here (e.g., "Met Dr. Smith, discussed diabetes drug, positive response") or ask for help.
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto space-y-3 pr-1">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`max-w-[90%] p-3 rounded-lg text-sm leading-relaxed ${
              msg.type === "user"
                ? "ml-auto bg-blue-100 text-gray-800"
                : msg.type === "ai"
                ? "bg-green-100 border-l-4 border-green-500 text-gray-800"
                : "bg-red-100 border-l-4 border-red-500 text-gray-800"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      {/* Input row */}
      <div className="flex items-center gap-2 mt-3">
        <input
          type="text"
          placeholder="Describe interaction..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="flex-1 h-14 px-4 border rounded-xl outline-none focus:ring-2 focus:ring-blue-500 bg-white"
        />

        <button
          type="button"
          onClick={handleSend}
          className="bg-blue-600 h-14 text-white px-4 py-2 rounded-full hover:bg-blue-700"
        >
          A Log
        </button>
      </div>
    </div>
  );
}

export default ChatAssistant;