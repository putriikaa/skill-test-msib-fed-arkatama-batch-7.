// src/lib/axios.ts
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://pmb.alkautsar.ponpes.id/api/cms",
  headers: { "Content-Type": "application/json" },
});

export default axiosInstance;
