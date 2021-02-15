import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

function Button({ data, link }) {
  const history = useHistory();
  return (
    <div className="flex justify-center">
      {link ? (
        <Link
          to={`/${data}`}
          className="bg-purple-400 hover:bg-indigo-500 text-white font-bold py-2 px-4 rounded m-2 lg:justify-center">
          <button>{data}</button>
        </Link>
      ) : (
        <Link
          to={`/${data}`}
          className="bg-purple-400 hover:bg-indigo-500 text-white font-bold py-2 px-4 rounded m-2 lg:justify-center"
          onClick={() => history.goBack()}>
          {data}
          
        </Link>
      )}
    </div>
  );
}

export default Button;
