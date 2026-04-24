
import { useEffect, useState } from "react";
import axios from "axios";

function History({ refreshKey }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // 🔥 call backend directly (skip your api.js for now)
        const res = await axios.get("http://127.0.0.1:8000/interactions");

        console.log("HISTORY RAW:", res);        // debug
        console.log("HISTORY DATA:", res.data);  // debug

        // ✅ always keep it an array
        setData(Array.isArray(res.data) ? res.data : []);
      } catch (err) {
        console.error("History fetch error:", err);
        setData([]); // never crash UI
      }
    };

    fetchData();
  }, [refreshKey]);

  return (
    <div style={{ marginTop: 20 }}>
      <h3>Recent Interactions</h3>

      {data.length === 0 ? (
        <p>No interactions yet</p>
      ) : (
        data.map((item) => (
      <div
         key={item.id}
         className="p-2 border rounded-lg bg-gray-50 shadow-sm hover:shadow-md transition"
        >
        <p className="font-medium">{item.hcp_name}</p>

        <p className="text-sm text-gray-600">{item.topics}</p>

        <p className="text-xs text-gray-500 mt-1">
        {item.sentiment} •{" "}
        {item.date
         ? new Date(item.date).toLocaleString()
         : "No date"}
        </p>
       </div>
        ))
      )}
    </div>
  );
}

export default History;