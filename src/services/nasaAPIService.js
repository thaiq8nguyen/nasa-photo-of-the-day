import axios from "axios";

const apiKey = process.env.NASA_API_KEY;

const client = axios.create({
  baseURL: "https://api.nasa.gov"
});

export default {
  getAPOD(date) {
    return client.get("planetary/apod?api_key=" + apiKey + "&date=" + date);
  }
};
