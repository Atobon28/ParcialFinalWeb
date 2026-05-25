import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useCompare from "../context/CompareContext.tsx";

function PaisDetail() {
    const { cca3 } = useParams();
    const [pais, setPais] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { addToCompare } = useCompare();

    useEffect(() => {
        try {
            setLoading(true);
            const response = await fetch(
                `https://restcountries.com/v3.1/alpha/${cca3}?fields=name,flags,region,capital,population,area,cca3`
            );
            const data = await response.json();
            setPais(data[0]);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }

        getPaisDetail();
    }, [cca3]);

    function handleAddToCompare() {
        const PaisToSave = {
            name: pais.name.common,
            flags: pais.flags.png,
            region: pais.region,
            capital: pais.capital,
            population: pais.population,
            area: pais.area,
            cca3: pais.cca3,
        };
        addToCompare(PaisToSave);
    }

    if (loading) {
        return <p>Cargando...</p>;
    }   

    if (error) {
        return <p>{error}</p>;
    }

    if (!pais) {
        return <p>No se encontró el país</p>;
    }

    const alreadyadded = compareList.some((item) => item.cca3 === pais.cca3);

    return (
        <main>
            <h1>{pais.name.common}</h1>
            <img src={pais.flags.png} alt={pais.name.common} />
            <p>Region: {pais.region}</p>
            <p>Capital: {pais.capital}</p>
            <p>Poblacion: {pais.population}</p>
            <p>Area: {pais.area}</p>

            <button onClick={handleAddToCompare} disabled={alreadyadded}>
                {alreadyadded ? "Ya agregado" : "Agregar a comparacion"}
            </button>

            {message && <p>{message}</p>}
        </main>
    );
}

export default PaisDetail;
