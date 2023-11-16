import { View,Text } from 'react-native';
import { createContext, useEffect, useState } from 'react';

export const contextoGeneral = createContext();


export function Contexto({children}){
    
    const[usuarioActivo,SetUsuarioActivo] = useState(true);
    const[activado,setActivado]=useState(null);
    const[estiloActivado,setEstiloActivado]=useState(null);
    const [datos, setDatos] = useState(null);
    const [perfil, setPerfil] = useState(false);
    const [instituciones, setInstituciones] = useState([]);
    const [institucionSelectionada, setInstitucionSelectionada] = useState(null);
    const [grados, setGrado] = useState(null);
    const[medalInstitucion,setModalInstitucion] = useState(false);
    const[listFilter,setListFilter] = useState([]);
    const [busquedaGrados,setBusquedaGrados] = useState([])


    const colores={
        'oscuro':'#272F32',
        'claro':'#D9D9D9'
    }

    return(
        <contextoGeneral.Provider value={{usuarioActivo,SetUsuarioActivo,colores,activado,setActivado,
            estiloActivado,setEstiloActivado,datos, setDatos,perfil, setPerfil,instituciones, setInstituciones,
            institucionSelectionada, setInstitucionSelectionada,medalInstitucion,setModalInstitucion,grados, setGrado,
            listFilter,setListFilter,busquedaGrados,setBusquedaGrados
        }}>
            {children}
        </contextoGeneral.Provider>
    )
}