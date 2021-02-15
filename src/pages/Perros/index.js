import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useState, useEffect } from "react";
import axios from "axios";
import CardMascotas from "../../components/cardMascotas";
import Button from "../../components/Button";
import "../../index.css";

function Perros({ data }) {
  const url = "https://hackourseit.herokuapp.com/mascotas/especie/perro";
  const [perros, setPerros] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const getPerros = await axios.get(url);
    setPerros(getPerros.data);
  }
  return (
    <>
      <Header />
      <div className="containerPage">
        {perros.map((item, key) => {
          return <CardMascotas key={key} data={item} />;
        })}
      </div>
      <Button data={"Volver"} />
      <Footer />
    </>
  );
}

export default Perros;
