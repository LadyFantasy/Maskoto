
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../../components/header/index.js"
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

  return (
    <>
      <Header></Header>
      <h1>Refugios:</h1>
      {refugios.map((item, key) => {
        return <CardRefugios key={key} data={item} />;
      })}
      <Button data={"Volver"} />
    </>
  );
}

export default Refugios;
