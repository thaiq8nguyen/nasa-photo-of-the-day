import React from "react";
import styles from "./Home.scss";

import ImageGrid from "/components/ImageGrid/ImageGrid";
import ImageOfTheDay from "../../components/ImageOfTheDay/ImageOfTheDay";

const Home = () => {
  return (
    <div className={styles.home}>
      <ImageGrid />
      <ImageOfTheDay />
    </div>
  );
};

export default Home;
