
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CardMascotas from "../../components/cardMascotas";
import Button from "../../components/Button"

function Mascotas() {
  const url = "https://hackourseit.herokuapp.com/mascotas";

  const [mascotas, setMascotas] = useState([]);
  // const [perros, setPerros] = useState([])
  // const [gatos, setGatos] = useState([])

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
      <div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
            <Button data={"Perros"} link={true} />
            <Button data={"Gatos"} link={true} />
          </div>
      
      {mascotas.map((item, key) => {
        return <CardMascotas key={key} data={item} />;
      })}
      <Button data={"Volver"} />
      <Footer />
    </>
  );
}

export default Mascotas;
