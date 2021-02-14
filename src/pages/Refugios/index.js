import {useHistory} from "react-router-dom"


function Refugios() {
  const history = useHistory()
  return(
    <>
    <p>Esto es Mascotas</p>
    <button onClick={() => history.goBack()}>Volver</button>
    </>
  )
}

export default Refugios