import Button from "../Button/index.js";
import { Link } from "react-router-dom";

function HomeComponent() {
  return (
    <>
      <div class="container px-4 pt-20 mx-auto lg:px-2">
        <div class="flex flex-col w-full mb-12 text-left lg:text-center">
          <h2 class="mb-1 text-xs font-semibold tracking-widest text-blue-600 uppercase title-font">
            Maskoto
          </h2>
          <h1 class="mb-6 text-2xl font-semibold tracking-tighter text-blue-800 sm:text-5xl title-font">
            ¿Querés darle amor a un animalito?
          </h1>
          <p class="mx-auto text-base font-medium leading-relaxed text-gray-700 lg:w-2/3">
            Somos Maskoto y te presentamos un catálogo formado por las mascotas en adopción en tu zona. ¿Estás buscando un nuevo amigo para sumar a tu familia? ¿Ya tenés bastantes mascotas pero querés colaborar con un refugio para que sigan rescatando animalitos de la calle? ¡Encontralos acá! 
          </p>
          <div style={{ display: "flex", flexDirection: "row", justifyContent:"center" }}>
          <Button data={"mascotas"} link={true} />
          <Button data={"refugios"} link={true} />
          </div>
        </div>
      </div>

      <div class="container flex flex-col items-center px-4 py-4 mx-auto lg:px-10 lg:py-10 md:flex-row">
        <div class="flex flex-col items-center w-full pt-0 mb-16 text-left lg:flex-grow md:w-1/2 lg:mr-20 lg:pr-24 md:pr-16 md:items-start md:text-left md:mb-0 lg:text-center">
          <h1 class="mb-8 text-2xl font-bold tracking-tighter text-center text-blue-800 lg:text-left lg:text-5xl title-font">
            Adoptar una mascota
          </h1>
          <p class="mb-8 text-base leading-relaxed text-center text-gray-700 lg:text-left lg:text-1xl">
            En nuestro catálogo podés encontrar muchos animalitos que te están esperando para llegar a tu hogar. Los refugios tienen gatos y perros de todas las edades que fueron rescatados, curados, bañados, desparasitados, vacunados, castrados, y ahora buscan un techo y una familia que les dé amor.
          </p>
          <div class="flex justify-center">
            <Link
              to="/mascotas"
              class="inline-flex items-center font-semibold text-blue-700 md:mb-2 lg:mb-0 hover:text-blue-400 ">
              Ver más
              <svg
                class="w-4 h-4 ml-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="20"
                height="20"
                fill="currentColor">
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" />
              </svg>
            </Link>
          </div>
        </div>
        <div class="w-5/6 lg:max-w-lg lg:w-full md:w-1/2">
          <img
            class="object-cover object-center rounded-lg "
            alt="mujer abrazando a un gato"
            src="https://images.unsplash.com/photo-1609804968103-c2a95f932732?ix"
          />
        </div>
      </div>

      <div class="container flex flex-col items-center px-5 py-16 mx-auto lg:px-20 lg:py-24 md:flex-row">
        <div class="w-5/6 mb-10 lg:max-w-lg lg:w-full md:w-1/2 md:mb-0">
        <img
            class="object-cover object-center rounded-lg "
            alt="mujer abrazando a un perro"
            src="https://images.pexels.com/photos/1139793/pexels-photo-1139793.jpeg"
          />
        </div>
        <div class="flex flex-col items-center text-center lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 md:items-start md:text-left">
          <h1 class="mb-8 text-2xl font-bold tracking-tighter text-center text-blue-800 lg:text-left lg:text-5xl title-font">
            Donar a un refugio
          </h1>
          <p class="mb-8 text-base leading-relaxed text-center text-gray-700 lg:text-left lg:text-1xl">
            Muchas veces los animales llegan a los refugios en mal estado, necesitando asistencia veterinaria. Los refugios subsisten en base a donaciones: podés encontrar links para donar usando la plataforma de Mercado Pago o contactarte directamente con ellos para hacer una donación mayor, o buscar el más cercano a tu casa para llevarles alimento, medicamentos, o cualquier otra colaboración. ¡Los animalitos también te lo van a agradecer!
          </p>
          <div class="flex justify-center">
            <Link
              to="/refugios"
              class="inline-flex items-center font-semibold text-blue-700 md:mb-2 lg:mb-0 hover:text-blue-400 ">
              Ver más
              <svg
                class="w-4 h-4 ml-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="20"
                height="20"
                fill="currentColor">
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
      <div class="container flex flex-col items-center px-5 py-16 mx-auto lg:px-20 lg:py-24 md:flex-row">
      <div class="flex flex-col items-center text-center lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 md:items-start md:text-left">
          <h1 class="mb-8 text-2xl font-bold tracking-tighter text-center text-blue-800 lg:text-left lg:text-5xl title-font">
            Colaborá con Maskoto
          </h1>
          <p class="mb-8 text-base leading-relaxed text-center text-gray-700 lg:text-left lg:text-1xl">
          Maskoto es un servicio gratuito para los refugios, nuestro trabajo es solidario y lo hacemos con el objetivo de que cada vez más rescatados se conviertan en mascotas.</p> <p class="mb-8 text-base leading-relaxed text-center text-gray-700 lg:text-left lg:text-1xl">Ayudanos a mantener la página activa e incorporar cada vez más refugios comprándonos un <a href="https://cafecito" class="inline-flex items-center font-semibold text-blue-700 md:mb-2 lg:mb-0 hover:text-blue-400 " target="blank">Cafecito</a>. </p></div>
          <div class="w-5/6 lg:max-w-lg lg:w-full md:w-1/2">
          <img
            class="object-cover object-center rounded-lg "
            alt="perrito enjaulado"
            src="https://images.unsplash.com/photo-1553688738-a278b9f063e0?ix"
          />
        </div>
       </div>

    </>
  );
}

export default HomeComponent;
