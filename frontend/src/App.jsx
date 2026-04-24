
import { useState } from "react";
import InteractionForm from "./components/InteractionForm";
import ChatAssistant from "./components/ChatAssistant";
import Header from "./components/Header";
import History from "./components/History";


function App() {

  const [formData, setFormData] = useState({
      hcp_name: "",
      topics: "",
      sentiment: ""
  });

  const [refreshKey, setRefreshKey] = useState(0);

  return (
    <div className="h-screen flex flex-col bg-gray-100">

      <Header />

      <div className=" flex flex-1 p-6 bg-gray-100">

        {/* LEFT FORM */}
        <div className="flex-1 p-6 bg-white shadow-md">
          <h2 className="text-2xl font-semibold mb-4">
            Log HCP Interaction
          </h2>

          <InteractionForm
          formData={formData}
          setFormData={setFormData}
          onSaved={() => setRefreshKey((k) => k + 1)} // 🔥 trigger refresh
          />

         <History refreshKey={refreshKey} />

        </div>

        {/* RIGHT AI */}
        <div className="w-1/3 p-6 bg-gray-50 border-l">
          <h3 className="text-xl font-semibold mb-4">
          </h3>

          <ChatAssistant setFormData={setFormData} />
        </div>

      </div>
    </div>
  );
}

export default App;