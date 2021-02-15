import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../../components/Header/index.js";
import Footer from "../../components/Footer/index";
import CardMascotas from "../../components/cardMascotas";
import Button from "../../components/Button";
import "../../index.css"

function Mascotas() {
  const url = "https://hackourseit.herokuapp.com/mascotas";

  const [mascotas, setMascotas] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const getMascotas = await axios.get(url);
    setMascotas(getMascotas.data);
  }

  return (
    <>
      <Header />
      <h1 class="mb-8 text-2xl font-bold tracking-tighter text-center text-blue-800 lg:text-left lg:text-5xl title-font">Mascotas en adopción</h1>
      <div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
        <Button data={"Perros"} link={true} />
        <Button data={"Gatos"} link={true} />
      </div>
      <div className="containerPage">
        {mascotas.map((item, key) => {
          return <CardMascotas key={key} data={item} />;
        })}
      </div>
      <Button data={"Volver"} />
      <Footer />
    </>
  );
}

export default Mascotas;
