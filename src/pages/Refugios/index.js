import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../../components/Header/index.js";
import CardRefugios from "../../components/cardRefugios";
import Button from "../../components/Button";
import "../../index.css"

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
      <h1 class="mb-8 text-2xl font-bold tracking-tighter text-center text-blue-800 lg:text-left lg:text-5xl title-font">Refugios:</h1>
      <div className="containerPage">
        {refugios.map((item, key) => {
          return <CardRefugios key={key} data={item} />;
        })}
      </div>
      <Button data={"Volver"} />
    </>
  );
}

export default Refugios;
