import React from "react";
import  HomeComponent  from "../../components/home/Home.js";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer.js";
import Button from "../../components/botton/Botton.js";

function Home() {
  return (
    <>
      <Header />
      <HomeComponent></HomeComponent>
      <Footer />
    </>
  );
}

export default Home;
