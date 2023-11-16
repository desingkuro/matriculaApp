import { View ,Text,StyleSheet} from "react-native";
import {HeaderTabNavigation} from '../components/HeaderTabNavigation'
import {contextoGeneral} from '../context/contexto'
import { useContext } from "react";

export function Inicio(){
    const {datos, setDatos,perfil, setPerfil} = useContext(contextoGeneral);
    return(
        <View style={estilos.containerPrincipal}>
            <HeaderTabNavigation texto={'Inicio'} userName={datos ?datos.nombre : 'nombre no cargado'}/>
        </View>
    )
}
const estilos = StyleSheet.create({
    containerPrincipal:{
        flex:1,
        backgroundColor:'#272F32'
    }
})