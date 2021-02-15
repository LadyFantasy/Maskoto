import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useState, useEffect } from "react";
import axios from "axios";
import CardMascotas from "../../components/cardMascotas";
import Button from "../../components/Button";
import "../../index.css";

function Gatos({ data }) {
  const url = "https://hackourseit.herokuapp.com/mascotas/especie/gato";
  const [gatos, setGatos] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const getGatos = await axios.get(url);
    setGatos(getGatos.data);
  }
  return (
    <>
      <Header />
      <div className="containerPage">
        {gatos.map((item, key) => {
          return <CardMascotas key={key} data={item} />;
        })}
      </div>
      <Button data={"Volver"} />
      <Footer />
    </>
  );
}

export default Gatos;
