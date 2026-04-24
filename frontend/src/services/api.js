
import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8000"
});

export const sendToAI = (message) =>
  API.post("/ai-chat", { message });

export const saveInteraction = (data) =>
  API.post("/log-interaction", data);