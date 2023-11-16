import { View,StyleSheet,TouchableOpacity } from "react-native";
import { FontAwesome5,FontAwesome } from '@expo/vector-icons';
import { useContext, useEffect } from "react";
import { contextoGeneral } from "../context/contexto";

export function SeleccionUser({estudiante,estilos,indice}){
    
    const{activado,setActivado,estiloActivado,setEstiloActivado}=useContext(contextoGeneral);
    useEffect(()=>{
        if(indice == activado){
            setEstiloActivado(estilos.seleccionElejida);
        }else{
            setEstiloActivado(estilos.seleccionNoElejida);
        }
    },[estiloActivado])
    function mostrarUser(){
        if(estudiante){
            return(
                <FontAwesome5 name="chalkboard-teacher" size={84} color="#D9D9D9" />
            )
        }
        return(
            <FontAwesome name="book" size={84} color="#D9D9D9" />
        )
    }
    function activarRol(){
        setActivado(indice);
    }
    return(
        <TouchableOpacity style={estiloActivado} onPress={activarRol}>
            {mostrarUser()}
        </TouchableOpacity>
    )
}