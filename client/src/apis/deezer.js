import axios from "axios";

const deezer = axios.create({
  baseURL: "https://deezerdevs-deezer.p.rapidapi.com",
});

export default deezer;
