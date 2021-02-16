import "../../index.css";
import { HashLink as Link } from 'react-router-hash-link';

function CardMascotas({ data }) {
  return (
    <div className="containerCard">
      <img className="img" src={data.image} alt={data.especie} />

      <div>
        <h2 className="nombre">{data.nombre}</h2>
        <p>{data.status === "libre" ? "En adopción" : "Adoptado"}</p>
        <p>{data.especie.charAt(0).toUpperCase() + data.especie.slice(1)}</p>
        <p>{data.sexo.charAt(0).toUpperCase() + data.sexo.slice(1)}</p>
        <button className="bg-purple-400 hover:bg-indigo-500 text-white font-bold py-2 px-4 rounded m-2 lg:justify-center">
          <Link to={`/refugios#${data.refugio}`}>Refugio de {data.nombre}</Link>
        </button>
      </div>
    </div>
  );
}

export default CardMascotas;
