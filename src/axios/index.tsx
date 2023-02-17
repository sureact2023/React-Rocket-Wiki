import axios from "axios";

export const apiSettings = axios.create({
  baseURL: "https://api.spacexdata.com/v4",
});
