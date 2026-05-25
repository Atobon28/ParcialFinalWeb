import {useCompare} from '../context/CompareContext.tsx';
import CompareCard from '../components/comparecard.jsx';

function Compare() {
    const { compareList } = useCompare();

    return (
        <main>
            <h1>Comparar Paises</h1>
            <h2>Seleccionados:</h2>
            {compareList.length === 0 ? (
                <p>No se han seleccionado paises para comparar</p>
            ) : ( 
                <section> 
                    {compareList.map((pais) => (
                        <CompareCard key={pais.cca3} pais={pais} />
                    ))}
                </section> 
            )}
        </main>
    );
}

export default Compare;