import "../../index.css";

function CardMascotas({ data }) {
  return (
    <div className="containerCard">
      <img className="img" src={data.image} alt={data.especie} />

      <div>
        <h2 className="nombre">{data.nombre}</h2>
        <p>{data.status === "libre" ? "En adopción" : "Adoptado"}</p>
        <p>{data.especie.charAt(0).toUpperCase() + data.especie.slice(1)}</p>
        <p>{data.sexo.charAt(0).toUpperCase() + data.sexo.slice(1)}</p>
        <button className="bg-purple-400 hover:bg-indigo-500 text-white font-bold py-2 px-4 rounded m-2 lg:justify-center">        <a href={`https://hackathon-front.vercel.app/refugios#${data.refugio}`}>Refugio</a>
      </button>
      </div>
    </div>
  );
}

export default CardMascotas;
