import axios from "axios";

const localHost = axios.create({
  baseURL: "http://localhost:3000",
});

export default localHost;
