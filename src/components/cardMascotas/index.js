function CardMascotas({ data }) {
  return (
    <div className="inline-block content-start max-w-sm px-5 py2 m-5 rounded overflow-hidden shadow-lg">
      <img className="px-3 w-full content-center" src={data.image} alt="perro o gato" />

      <div className="pt-6 text-center space-y-4">
        <h2 className="font-bold mb-2 text-center text-5xl">{data.nombre}</h2>
        <p className="text-purple-700">
          {data.status === "libre" ? "En adopción" : "Adoptado"}
        </p>
        {/* <p>
        Refugio: (FALTA DATA DEL BACK)
        <a href="">{data.refugio_id}</a>
      </p> */}
        <p>{data.especie.charAt(0).toUpperCase() + data.especie.slice(1)}</p>
        <p>{data.sexo}</p>
      </div>
    </div>
  );
}

export default CardMascotas;
