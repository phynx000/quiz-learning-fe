import React from "react";
import videoHomePage from "../../assets/videos/video-homepage.mp4";

const HomePage = (props) => {
  return (
    <div className="home-container">
      <video autoPlay loop muted>
        <source src={videoHomePage} type="video/mp4" />
      </video>

      <div className="homepage-content">
        <div className="homepage-heading">
          Get to know your customers with forms worth filling out
        </div>
        <div className="homepage-description">
          Collect all the data you need to understand customers with forms
          designed to be refreshingly different.
        </div>
        <div>
          <button className="homepage-getstarted-btn">
            Get start-it's free
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
