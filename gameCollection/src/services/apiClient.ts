import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "c0c02e72286d476297bc63655942796c",
  },
});
