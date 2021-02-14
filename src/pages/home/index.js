import React  from "react";
import Header from "../../components/header";
import { Link } from "react-router-dom";

function Home() {

  

  return (
    <>
      <Header />
      <p>¿Qué querés buscar?</p>
      <Link to={"/mascotas"}>
        <button>Mascotas</button>
      </Link>
      <Link to={"/refugios"}>
        <button>Refugios</button>
      </Link>
    </>
  );
}

export default Home;
