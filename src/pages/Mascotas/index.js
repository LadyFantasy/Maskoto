
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CardMascotas from "../../components/cardMascotas";
import Button from "../../components/Button"

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
      <h1>Mascotas en adopción</h1>
      
      {mascotas.map((item, key) => {
        return <CardMascotas key={key} data={item} />;
      })}
      <Button data={"Volver"} />
      <Footer />
    </>
  );
}

export default Mascotas;
