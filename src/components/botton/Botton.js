import { Link } from "react-router-dom";

function Button() {
  return (
    <>
      <div className="flex justify-center">
      <Link
        to="/mascotas"
        className="bg-purple-400 hover:bg-indigo-500 text-white font-bold py-2 px-4 rounded m-2 lg:justify-center"
      >
        <button>Mascotas</button>
      </Link>
      <Link
        to="/refugios"
        className="bg-purple-400 hover:bg-indigo-500 text-white font-bold py-2 px-4 rounded m-2 "
      >
        <button>Refugios</button>
      </Link>
      </div>
    </>
  );
}

export default Button;


