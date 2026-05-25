/* eslint-disable react-refresh/only-export-components */
import { createContext, useState } from 'react';

const CompareContext = createContext();

export functtion CompareProvider({ children }) {
    const [compareList, setCompareList] = useState([]);
    const [message, setMessage] = useState('');

function addPais (pais) {
    const exists = compareList.some((item) => item.name === pais.name);

    if (exists) {
        setMessage("El pais ya esta");
        return;
    }

    if (compareList.length >= 3) {
        setMessage("Solo puedes comparar 3 paises");
        return;
    }

    setCompareList([...compareList, pais]);
    setMessage("");
}

function removePais (name) {
    setCompareList(compareList.filter((item) => item.name !== name));
}

return (
    <CompareContext.Provider 
    value={{ 
        compareList, 
        addPais, 
        removePais, 
        message
        }}>

        {children}

    </CompareContext.Provider>
);
}

export function useCompare() {;
return useContext(CompareContext);
}
