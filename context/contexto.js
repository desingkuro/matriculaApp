import { View,Text } from 'react-native';
import { createContext, useEffect, useState } from 'react';

export const contextoGeneral = createContext();


export function Contexto({children}){
    
    const [usuarioActivo,SetUsuarioActivo] = useState(false);

    const colores={
        'oscuro':'#272F32',
        'claro':'#D9D9D9'
    }

    return(
        <contextoGeneral.Provider value={{usuarioActivo,SetUsuarioActivo,colores}}>
            {children}
        </contextoGeneral.Provider>
    )
}