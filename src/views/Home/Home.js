import React from "react";
import styles from "./Home.scss";
import cx from "classnames";
import ImageOfTheDay from "/components/ImageOfTheDay/ImageOfTheDay";
import SpaceNews from "/components/SpaceNews/SpaceNews";

const Home = () => {
  return (
    <div className="home">
      <section className={cx("hero is-medium", styles.introduction)}>
        <div className="hero-body">
          <div className="columns">
            <div className="column is-5">
              <div className="content has-text-white">
                <p className="is-size-4">
                  Space is for everybody. It &apos;s not just for a few people
                  in science or math, or for a select group of astronauts.
                  That&apos;s our new frontier out there, and it&apos;s
                  everybody&apos;s business to know about space.
                </p>
                <p className="has-text-white has-text-weight-bold is-size-4">
                  CHRISTA MCAULIFFE, December 6, 1985
                </p>
              </div>
            </div>
            <div className="column"></div>
            <div className="column is-5">
              <ImageOfTheDay />
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <SpaceNews />
      </section>
    </div>
  );
};

export default Home;
