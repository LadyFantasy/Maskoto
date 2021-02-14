import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../../components/cardMascotas"

function Mascotas() {
  const url = "http://localhost:3000/mascotas";

  const [mascotas, setMascotas] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const getMascotas = await axios.get(url);
    setMascotas(getMascotas.data);
    console.log(mascotas)
  }

    
    

  const history = useHistory();
  return (
    <>
      <p>Mascotas en adopción</p>

      <button onClick={() => history.goBack()}>Volver</button>
    </>
  );
}

export default Mascotas;
