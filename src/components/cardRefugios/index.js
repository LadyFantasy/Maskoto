import whatsappImg from "../../assets/124034.png"
import instagramImg from "../../assets/72a3d9408d41335f39e9f014dc35cf44.jpg"


function cardRefugios({data}){
  return(
    <div>
      <h2 >{data.nombre}</h2>
      <p><img style={{width: "1.5rem"}} src={whatsappImg} alt="whatsapp"/>{data.whatsapp}</p>
      <a href={data.url_donar}>Mercadopago</a>
      <p>Dirección: {data.direccion}</p>
      <p>Ciudad: {data.ciudad}</p>
      <p><img style={{width: "1.5rem"}} src={instagramImg} alt="instagram"/><a href={data.instagram}>{data.nombre}</a></p>
    </div>
  )
}


export default cardRefugios