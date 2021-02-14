import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import CardRefugios from "../../components/cardRefugios";

function Refugios() {
  const url = "https://hackourseit.herokuapp.com/refugios";

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
      <h1>Refugios:</h1>
      {refugios.map((item, key) => {
        return <CardRefugios key={key} data={item} />;
      })}
      <button onClick={() => history.goBack()}>Volver</button>
    </>
  );
}

export default Refugios;
