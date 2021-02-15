import whatsappImg from "../../assets/124034.png";
import instagramImg from "../../assets/72a3d9408d41335f39e9f014dc35cf44.jpg";
import mercadoPagoImg from "../../assets/MercadoPago_Logo.png";
import "../../index.css"

function cardRefugios({ data }) {
  return (
    <div className="containerCardSingle" id={data._id}>
      <img className="imgSingle" src={data.image} alt="imagen refugio"/>
      <div className="containerInfo">
        <h2 className="nombre">{data.nombre}</h2>
        <div className="containerLogoText">
          <img style={{ width: "1.5rem" }} src={whatsappImg} alt="whatsapp" />
          {data.whatsapp}
        </div>
        <p>Dirección: {data.direccion}</p>
        <p>Ciudad: {data.ciudad}</p>
        <div className="containerLogoText">
          <img style={{ width: "2rem" }} src={instagramImg} alt="instagram" />
          <a href={data.instagram}>{data.nombre}</a>
        </div>
        <a href={data.url_donar}>
          <img style={{ width: "3rem" }} src={mercadoPagoImg} alt="mercadopago" />
        </a>
      </div>
    </div>
  );
}

export default cardRefugios;
