import { View,StyleSheet,TouchableOpacity } from "react-native";
import { HeaderScreen } from "../components/HeaderScreen";
import {Boton} from '../components/Boton'

import { SeleccionUser } from "../components/SeleccionUser";

export function SeleccionRegistro({navigation}){
    function siguiente(){
        navigation.navigate('Registro');
    }
    function goBack(){
        navigation.goBack();
    }

    function eleccionDeRol(){
        const roles = ['Estudiante','Directivo'];
        return(
            roles.map((e,i)=>{
                return(
                    <SeleccionUser estudiante={i==0?true:false} estilos = {estilos} key={i} indice={i}/>
                )
            })
        )
    }

    return(
        <View style={estilos.contenedorPrincipal}>
            <HeaderScreen texto={'Crear Cuenta'} funcion={goBack}/>
            <View style={estilos.main}>
                {eleccionDeRol()}
            </View>
            <Boton texto={'Siguiente'} color={'claro'} funcion={siguiente}/>
        </View>
    )
}

const estilos = StyleSheet.create({
    contenedorPrincipal:{
        flex:1,
        backgroundColor:'#272F32',
        alignItems:'center'
    },
    main:{
        alignItems:'center',
        justifyContent:'center',
        width:'100%',
        height:500,
        marginTop:50,
        marginBottom:50,
        gap:20
    },
    seleccionElejida:{
        height:200,
        alignItems:'center',
        justifyContent:'center',
        width:200,
        borderRadius:20,
        borderColor:'#81D1E2',
        borderWidth:5
    },
    seleccionNoElejida:{
        height:200,
        alignItems:'center',
        justifyContent:'center',
        width:200,
        borderRadius:20,
        borderColor:'#D9D9D9',
        borderWidth:5
    }
})