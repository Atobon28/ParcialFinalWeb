import { Route } from "react-router-dom";
import Navbar from "./components/navbar.tsx";
import Home from "./pages/home.tsx";
import PaisDetail from "./pages/paisdetail.tsx";

function App() {
	return (
		<div className="App">
			<Navbar />
			<Route path="/" element={<Home />} />
			<Route path="/pais/:id" element={<PaisDetail />} />
		</div>
	);
}

export default App;
