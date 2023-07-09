import axios from "axios";

export default function useApi() {
  const api = axios.create();

  api.defaults.baseURL = "https://master.demo.sylius.com/api/v2/";
  api.defaults.headers["accept"] = "application/json";

  return api;
}
