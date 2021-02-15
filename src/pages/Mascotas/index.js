import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CardMascotas from "../../components/CardMascotas/index"

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

  const history = useHistory();
  return (
    <>
      <Header />
      <h1>Mascotas en adopción</h1>
      {mascotas.map((item, key) => {
        return <CardMascotas key={key} data={item} />;
      })}
      <button onClick={() => history.goBack()}>Volver</button>
      <Footer />
    </>
  );
}

export default Mascotas;
