function CardMascotas({ data }) {
  return (
    <div>
      <p>ACÁ ABAJO VA LA IMAGEN QUE FALTA CARGAR DEL BACK</p>
      <img src={data.image} alt="" />
      <h2>{data.nombre}</h2>
      <p>{data.status === "libre" ? "En adopción" : "Adoptado"}</p>
      <p>
        Refugio: (FALTA DATA DEL BACK)
        {/* <a href="">{data.refugio_id}</a> */}
      </p>
      <p>{data.especie.charAt(0).toUpperCase() + data.especie.slice(1)}</p>
    </div>
  );
}

export default CardMascotas;
