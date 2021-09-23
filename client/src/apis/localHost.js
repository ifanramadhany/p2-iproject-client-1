import axios from "axios";

// const localHost = axios.create({
//   baseURL: "http://localhost:3000",
// });

const localHost = axios.create({
  baseURL: "https://h8-sepotipaigram-app.herokuapp.com",
});

export default localHost;
