import React from "react";
import  HomeComponent  from "../../components/HomeComponent/index.js";
import Header from "../../components/Header/index.js";
import Footer from "../../components/Footer/index.js";

function Home() {
  return (
    <>
      <Header />
      <HomeComponent />
      <Footer />
    </>
  );
}

export default Home;
