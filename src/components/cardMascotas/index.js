import "../../index.css";

function CardMascotas({ data }) {
  return (
    <div className="containerCard">
      <img className="img" src={data.image} alt={data.especie} />

      <div>
        <h2 className="nombre">{data.nombre}</h2>
        <p>{data.status === "libre" ? "En adopción" : "Adoptado"}</p>
         <p>        <a href={`https://hackathon-front.vercel.app/refugios#${data.refugio}`}>Refugio</a>
      </p> 
        <p>{data.especie.charAt(0).toUpperCase() + data.especie.slice(1)}</p>
        <p>{data.sexo.charAt(0).toUpperCase() + data.sexo.slice(1)}</p>
      </div>
    </div>
  );
}

export default CardMascotas;
