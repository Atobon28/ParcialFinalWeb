import {useEffect, useState} from 'react';
import PaisCard from "../components/PaisCard.jsx";

function Home() {
    const [paises, setPaises] = useState([]);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function getPaises() {
            try {
                const response = await fetch(
                    "https://restcountries.com/v3.1/all?fields=name,flags,region,capital,population,area,cca3"
                );
            if (!response.ok) {
                throw new Error("No se hizo el Fetch");
            }
            const data = await response.json();
            setPaises(data);

        } catch (error) {
            setError("Error");
        } finally {
            setLoading(false);

        }
        }
        getPaises();
    }, []);

    const filterPaises = paises.filter((pais) =>
        pais.name.common.toLowerCase().includes(search.toLowerCase())
    );

    if (loading) {
        return <p>Cargando...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <main>
            <h1>Comparador de Paises</h1>
            <input
                type="text"
                placeholder="Buscar pais..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            {filterPaises.length === 0 ? (
                
                <p>No se encontraron paises</p>
            ) : (
                <div>
                    {filterPaises.map((pais) => (
                        <PaisCard key={pais.cca3} pais={pais} />
                    ))}
                </div>
            )}
        </main>
    );
}

export default Home;
