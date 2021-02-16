import whatsappImg from "../../assets/124034.png";
import instagramImg from "../../assets/72a3d9408d41335f39e9f014dc35cf44.jpg";
import mercadoPagoImg from "../../assets/MercadoPago_Logo.png";
import "../../index.css"

function cardRefugios({ data }) {
  return (
    <div class="min-w-screen flex items-center overflow-hidden relative py-10" id={data._id}>
    <div class="w-full max-w-6xl rounded bg-white shadow-xl py-10 mx-auto text-gray-800 relative md:text-left" >
      <div class="md:flex items-center -mx-10">
            <div class="w-full md:w-3/4 px-10 mb-10 md:mb-0">
                <div class="relative">      
      
      <img class="w-full relative z-10" src={data.image} alt="imagen refugio"/>
      </div>
      </div>
      <div class="w-full md:w-1/2 px-10">
      <div class="mb-10">
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
    </div>
    </div>
    </div>
  );
}

export default cardRefugios;
