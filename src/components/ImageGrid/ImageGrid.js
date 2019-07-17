import React, { useState, useEffect } from "react";
import cx from "classnames";
import { format } from "date-fns";
import nasaAPIService from "../../services/nasaAPIService";
import styles from "./ImageGrid.scss";

const ImageGrid = () => {
  const [media, setMedia] = useState({});
  const [explanation, toggleExplanation] = useState(false);

  const showExplanation = explanation ? "" : "is-hidden";
  useEffect(() => {
    const today = format(new Date(), "YYYY-MM-DD");
    nasaAPIService.getAPOD(today).then(response => {
      setMedia(response.data);
    });
  }, []);

  const handleToggleExplanation = () => {
    toggleExplanation(!explanation);
  };
  return (
    <section className="section">
      <div className="container">
        <div className="columns">
          <div className="column is-6 is-offset-3">
            <div className="card">
              <header className="card-header">
                <h1 className="card-header-title">{media.title}</h1>
              </header>
              <div className="card-content">
                <div className={styles["media-container"]}>
                  <iframe
                    className={styles["video-content"]}
                    title={media.title}
                    src={media.url}
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  ></iframe>
                </div>
                <button
                  className={cx("button", styles["media-explanation-button"])}
                  onClick={handleToggleExplanation}
                >
                  Read More
                </button>
                <div className={cx("content", showExplanation)}>
                  <p>{media.explanation}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageGrid;
