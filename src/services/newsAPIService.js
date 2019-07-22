import axios from "axios";

const apiKey = process.env.NEWS_API_KEY;

const client = axios.create({
  baseURL: "https://newsapi.org/v2"
});

export default {
  getHeadlineNews(category) {
    return client.get(
      `top-headlines?country=us&category=${category}&apiKey=${apiKey}`
    );
  },
  getTopicNews(topic) {
    return client.get(
      `everything?q=${topic}&language=en&pageSize=10&sortBy=publishedAt&apiKey=${apiKey}`
    );
  }
};
