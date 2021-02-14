import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function Mascotas() {
  const url = "http://localhost:3000/mascotas";

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
      <p>Esto es Mascotas</p>
      <button onClick={() => history.goBack()}>Volver</button>
    </>
  );
}

export default Mascotas;
