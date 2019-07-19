import React, { useState, useEffect } from "react";
import cx from "classnames";
import { format } from "date-fns";
import nasaAPIService from "../../services/nasaAPIService";
//import nasaLogo from "/assets/images/nasa_logo.png";
import styles from "./ImageOfTheDay.scss";

const ImageGrid = () => {
  const [media, setMedia] = useState({});

  useEffect(() => {
    const today = format(new Date(), "YYYY-MM-DD");
    nasaAPIService.getAPOD(today).then(response => {
      setMedia(response.data);
    });
  }, []);

  const mediaContent =
    media.media_type === "image" ? (
      <div className={styles["image-container"]}>
        <img src={media.url} alt="" className={styles["image-content"]} />
      </div>
    ) : (
      <div className={styles["video-container"]}>
        <iframe
          className={styles["video-content"]}
          title={media.title}
          src={media.url}
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      </div>
    );
  return (
    <div className="card">
      <header className="card-header">
        <div className={styles["logo-container"]}></div>
        <h1 className="card-header-title is-size-5">
          Astronomy Image Of The Day
        </h1>
      </header>
      <div className="card-content">
        {mediaContent}
        <div className="notification has-background-white">
          <h2 className={cx("has-text-centered content title")}>
            {media.title}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default ImageGrid;
