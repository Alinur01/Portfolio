import React from "react";
import Photo from "../assets/me.png";
import "./style/home.css";

const Home = () => {
  return (
    <section id="home" className="home">
      <div className="container">
        <div className="home__row">
          <div className="home__card">
            <h1 className="home__title">
              Alinur <br /> Satylganov
            </h1>
          </div>
          <div className="home__card">
            <h2 className="home__subtitle">
              Frontend web developer <br /> 21 years old <br /> Kyrgyzstan,
              Bishkek
            </h2>
          </div>
        </div>
        <img className="home__img" src={Photo} alt="Alinur" />
      </div>
    </section>
  );
};

export default Home;
