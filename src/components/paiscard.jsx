import {link} from 'react-router-dom';

function PaisCard({pais}) {
    return (
        <div>
            <h2>{pais.name.common}</h2>
            <img src={pais.flags.png} alt={pais.name.common} />
        </div>
    );
}

export default PaisCard;