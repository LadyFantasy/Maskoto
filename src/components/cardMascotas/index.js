import "../../index.css"

function CardMascotas({ data }) {
  return (
    <div className="containerCard">

      <img className="img" 
     
      src={data.image} alt="perro o gato" />

      <div >
        <h2 >{data.nombre}</h2>
        <p >{data.status === "libre" ? "En adopción" : "Adoptado"}</p>
        {/* <p>
        Refugio: (FALTA DATA DEL BACK)
        <a href="">{data.refugio_id}</a>
      </p> */}
        <p>{data.especie.charAt(0).toUpperCase() + data.especie.slice(1)}</p>
        <p>{data.sexo.charAt(0).toUpperCase() + data.sexo.slice(1)}</p>
      </div>
    </div>
  );
}

export default CardMascotas;
