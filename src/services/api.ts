import axios from "axios";

export const api = axios.create({
  baseURL: "https://literalura-backend.onrender.com/api",
});
