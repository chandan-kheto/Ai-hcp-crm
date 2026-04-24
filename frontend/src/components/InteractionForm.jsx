import { useState } from "react";
import { saveInteraction } from "../services/api";

function InteractionForm({ formData, setFormData, onSaved }) {
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);

      const formattedDate = formData.date
        ? new Date(formData.date)
            .toISOString()
            .slice(0, 19)
            .replace("T", " ")
        : null;

      const payload = {
        ...formData,
        date: formattedDate
      };

      console.log("SENDING:", payload);

      await saveInteraction(payload);

      alert("Saved successfully ✅");

      // ✅ refresh history
      if (onSaved) onSaved();

      // ✅ reset form
      setFormData({
        hcp_name: "",
        interaction_type: "",
        date: "",
        topics: "",
        materials: "",
        samples: "",
        sentiment: "",
        outcome: "",
        follow_up: ""
      });

    } catch (err) {
      console.error("SAVE ERROR:", err);
      alert("Error saving interaction ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4">

      <input
        name="hcp_name"
        placeholder="HCP Name"
        value={formData.hcp_name || ""}
        onChange={handleChange}
        className="w-full p-3 border rounded-lg"
      />

      <div className="flex gap-4">
        <select
          name="interaction_type"
          value={formData.interaction_type || ""}
          onChange={handleChange}
          className="w-1/2 p-3 border rounded-lg"
        >
          <option value="">Interaction Type</option>
          <option>Meeting</option>
          <option>Call</option>
        </select>

        <input
          type="datetime-local"
          name="date"
          value={formData.date || ""}
          onChange={handleChange}
          className="w-1/2 p-3 border rounded-lg"
        />
      </div>

      <textarea
        name="topics"
        placeholder="Topics Discussed"
        value={formData.topics || ""}
        onChange={handleChange}
        className="w-full p-3 border rounded-lg"
      />

      <textarea
        name="materials"
        placeholder="Materials Shared"
        value={formData.materials || ""}
        onChange={handleChange}
        className="w-full p-3 border rounded-lg"
      />

      <textarea
        name="samples"
        placeholder="Samples Distributed"
        value={formData.samples || ""}
        onChange={handleChange}
        className="w-full p-3 border rounded-lg"
      />

      <select
        name="sentiment"
        value={formData.sentiment || ""}
        onChange={handleChange}
        className="w-full p-3 border rounded-lg"
      >
        <option value="">HCP Sentiment</option>
        <option>Positive</option>
        <option>Neutral</option>
        <option>Negative</option>
      </select>

      <textarea
        name="outcome"
        placeholder="Outcome"
        value={formData.outcome || ""}
        onChange={handleChange}
        className="w-full p-3 border rounded-lg"
      />

      <textarea
        name="follow_up"
        placeholder="Follow-up Actions"
        value={formData.follow_up || ""}
        onChange={handleChange}
        className="w-full p-3 border rounded-lg"
      />

      <button
        onClick={handleSubmit}
        disabled={loading}
        className={`w-full py-3 rounded-lg text-white ${
          loading ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"
        }`}
      >
        {loading ? "Saving..." : "Save Interaction"}
      </button>

    </div>
  );
}

export default InteractionForm;