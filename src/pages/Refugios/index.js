import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function Refugios() {
  const url = "http://localhost:3000/refugios";

  const [refugios, setRefugios] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const getRefugios = await axios.get(url);
    setRefugios(getRefugios.data);
  }

  const history = useHistory();
  return (
    <>
      <p>Esto es Mascotas</p>
      <button onClick={() => history.goBack()}>Volver</button>
    </>
  );
}

export default Refugios;
