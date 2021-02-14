import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import CardMascotas from "../../components/cardMascotas";

function Mascotas() {
  const url = "http://localhost:3000/mascotas";

  const [mascotas, setMascotas] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const getMascotas = await axios.get(url);
    setMascotas(getMascotas.data);
    console.log("page", mascotas);
  }

  const history = useHistory();
  return (
    <>
      <h1>Mascotas en adopción</h1>
      {mascotas.map((item, key) => {
        return <CardMascotas key={key} data={item} />;
      })}
      <button onClick={() => history.goBack()}>Volver</button>
    </>
  );
}

export default Mascotas;
