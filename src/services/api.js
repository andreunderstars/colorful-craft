import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.4.3:3000", //inserir URL aqui
});

export default api;
