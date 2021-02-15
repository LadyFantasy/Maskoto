import whatsappImg from "../../assets/124034.png"
import instagramImg from "../../assets/72a3d9408d41335f39e9f014dc35cf44.jpg"
import mercadoPagoImg from "../../assets/MercadoPago_Logo.png"


function cardRefugios({data}){
  return(
    <div>
      <h2>{data.nombre}</h2>
      <p><img style={{width: "1.5rem"}} src={whatsappImg} alt="whatsapp"/>{data.whatsapp}</p>
      
      <p>Dirección: {data.direccion}</p>
      <p>Ciudad: {data.ciudad}</p>
      <p><img style={{width: "1.5rem"}} src={instagramImg} alt="instagram"/><a href={data.instagram}>{data.nombre}</a></p>
      <a href={data.url_donar}><img style={{width: "1.5rem"}} src={mercadoPagoImg} alt="mercadopago"/></a>
    </div>


  )
}


export default cardRefugios