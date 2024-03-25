import axios from "axios";

const api = axios.create({
  baseURL: "http://200.235.94.163:3000", //inserir URL aqui
});

export default api;
