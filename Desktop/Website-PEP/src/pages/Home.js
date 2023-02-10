import React from "react";
import Layout from "./../components/Layout/Layout";
import { Link } from "react-router-dom";
import bgVideo  from "./../video/bg.mp4";
import "../styles/HomeStyles.css";

const Home = () => {
  return (
    <Layout>
      <div className="home">

        <video autoPlay loop muted id="video">
          <source src = {bgVideo} type='video/mp4'/>
        </video>

        <div className="headerContainer">
          <h1>ITALIAN</h1>
          <p>Best Food</p>
          <Link to="/menu">
            <button>ORDER NOW</button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
