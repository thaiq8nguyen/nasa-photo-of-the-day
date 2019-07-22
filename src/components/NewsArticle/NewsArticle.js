import React from "react";
import { format, subHours } from "date-fns";
const NewsArticle = ({ article }) => {
  return (
    <div className="card">
      <div className="card-content">
        <article className="media">
          {article.urlToImage ? (
            <figure className="media-left">
              <p className="image is-128x128">
                <img src={article.urlToImage} alt="" />
              </p>
            </figure>
          ) : null}
          <div className="media-content">
            <div className="content">
              <a href={article.url}>
                <p className="is-size-6">{article.title}</p>
              </a>
              <br />

              <p className="has-text-info is-size-7">{article.author}</p>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default NewsArticle;
