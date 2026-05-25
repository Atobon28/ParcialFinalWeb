import { Link } from "react-router-dom";
import { useCompare } from "../context/CompareContext.tsx";

function Navbar() {
    const { compareList } = useCompare();

    return (
        <nav className="navbar">
            <h2>Comparador de Paises</h2>

            <div>
                <Link to="/">Home</Link>
                <Link to="/compare">Compare ({compareList.length})</Link>
            </div>
        </nav>
    );
}

export default Navbar;