import { Link } from "react-router-dom";
import Button from "../Button";

function Header() {
  return (
    <header>
      <nav
        className="flex justify-between items-center h-16 bg-purple-600 text-white relative font-mono"
        role="navigation">
        <Link to="/" className="text-left font-sans font-extrabold text-4xl p-4">Maskoto</Link>
        <div className="pr-8 md:block  hidden">
          <div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
            <Button data={"mascotas"} link={true} />
            <Button data={"refugios"} link={true} />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
