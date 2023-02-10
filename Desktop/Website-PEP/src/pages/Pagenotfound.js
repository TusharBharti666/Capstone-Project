import React from "react";
import Layout from "./../components/Layout/Layout";
import bg from "./../images/commonBg.jpg";

const Pagenotfound = () => {
  return (
    <Layout sx ={{backgroundImage: `url(${bg})`}}>
      <h1>Page Not Found</h1>
    </Layout>
  );
};

export default Pagenotfound;
