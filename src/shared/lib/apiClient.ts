import axios from "axios";
import { BASE_URL } from "@shared/constants";

const apiClient = axios.create({
  baseURL: BASE_URL,
});

export { apiClient };
