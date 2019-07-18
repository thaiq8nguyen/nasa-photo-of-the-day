import React, { useState, useEffect } from "react";
import { format, subDays } from "date-fns";
import nasaAPIService from "../../services/nasaAPIService";

import styles from "./PreviousImageOfTheDay.scss";

import Calendar from "react-calendar";

const PreviousImageOfTheDay = () => {
  const yesterday = subDays(new Date(), 1); //default date when the app is loaded
  const [media, setMedia] = useState({});
  const [date, setDate] = useState(yesterday);
  const maxDate = new Date();

  useEffect(() => {
    const formatted = format(date, "YYYY-MM-DD");
    nasaAPIService.getAPOD(formatted).then(response => {
      setMedia(response.data);
    });
  }, [date]);

  const mediaContent =
    media.media_type === "image" ? (
      <div className={styles["image-container"]}>
        <img src={media.url} className={styles["image-content"]} alt="" />
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
  const handleDateChange = value => {
    setDate(value);
  };
  return (
    <section className="section">
      <div className="card">
        <header className="card-header">
          <h1 className="card-header-title">Past Images of The Day</h1>
        </header>
        <div className="card-content">
          <div className="columns">
            <div className="column is-half has-text-centered">
              <Calendar
                value={date}
                maxDate={maxDate}
                onChange={handleDateChange}
              />
            </div>
            <div className="column is half has-text-centered">
              {media ? mediaContent : "Loading..."}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PreviousImageOfTheDay;
