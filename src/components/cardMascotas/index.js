function CardMascotas({ data }) {
  return (
    <div>
      <img src={data.image} alt="perro o gato" />
      <h2>{data.nombre}</h2>
      <p>{data.status === "libre" ? "En adopción" : "Adoptado"}</p>
      {/* <p>
        Refugio: (FALTA DATA DEL BACK)
        <a href="">{data.refugio_id}</a>
      </p> */}
      <p>{data.especie.charAt(0).toUpperCase() + data.especie.slice(1)}</p>
      <p>{data.sexo}</p>
    </div>
  );
}

export default CardMascotas;
