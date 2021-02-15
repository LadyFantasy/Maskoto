import React from "react";
import  HomeComponent  from "../../components/home/index.js";
import Header from "../../components/header/index.js";
import Footer from "../../components/footer/index.js";

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
