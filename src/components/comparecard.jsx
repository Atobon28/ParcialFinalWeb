import {useCompare} from '../context/CompareContext.tsx';

function CompareCard({ pais }) {
    const { removeFromCompare } = useCompare();

return (
    <div>
        <h2>{pais.name}</h2>
        <img src={pais.flags} alt={pais.name} />
        <p>Region: {pais.region}</p>
        <button onClick={() => removeFromCompare(pais.cca3)}>Eliminar</button>
    </div>
);
}   
export default CompareCard;