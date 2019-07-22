import React, { useState, useEffect } from "react";
import newsAPIService from "../../services/newsAPIService";
import NewsArticle from "/components/NewsArticle/NewsArticle";

import styles from "./SpaceNews.scss";

const SpaceNews = () => {
  const [articles, setArticles] = useState([]);
  const [topics, setTopics] = useState([
    "Genetics",
    "Outer Space",
    "Environment",
    "Technology",
    "Physic",
    "Blockchain"
  ]);

  const [topic, setTopic] = useState("Blockchain");

  useEffect(() => {
    newsAPIService.getTopicNews(topic).then(response => {
      setArticles(response.data.articles);
    });
  }, [topic]);
  const handleTopicClick = event => {
    const selectedTopic = event.target.id;
    setTopic(selectedTopic);
  };
  return (
    <section className="section">
      <div className="container">
        <h1 className="title">Science News</h1>
        <div className="columns">
          <aside className="column is-one-fifth">
            <p className="menu-label">Topics</p>
            <ul className="menu-list">
              {topics.sort().map((topic, index) => (
                <li key={index}>
                  <a onClick={handleTopicClick} id={topic}>
                    {topic}
                  </a>
                </li>
              ))}
            </ul>
          </aside>
          <div className="column">
            <div className="columns is-multiline">
              {articles &&
                articles.map((article, index) => (
                  <div className="column is-half" key={index}>
                    <NewsArticle article={article} />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpaceNews;
