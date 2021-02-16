import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../../components/Header/index.js";
import CardRefugios from "../../components/cardRefugios";
import Button from "../../components/Button";
import "../../index.css";

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
      <Header/>
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
