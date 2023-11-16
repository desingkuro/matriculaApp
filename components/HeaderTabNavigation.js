import { FontAwesome } from '@expo/vector-icons';
import { useContext } from 'react';
import { View,Text,StyleSheet, TouchableOpacity } from "react-native";
import { contextoGeneral } from '../context/contexto';

export function HeaderTabNavigation({texto,userName}){
    const {perfil, setPerfil} = useContext(contextoGeneral);
    function abrirPerfil(){
        setPerfil(true);
    }
    return(
        <View style={estilos.headerStyle}>
            <TouchableOpacity style={estilos.contenedorFlecha} onPress={abrirPerfil}>
                <FontAwesome name="user-circle" size={44} color="#272F32" />
            </TouchableOpacity>
            <View style={estilos.contenedorText}>
                <Text style={estilos.userTitle}>
                    {userName}
                </Text>
                <Text style={estilos.headerTitle}>
                    {texto}
                </Text>
            </View>
        </View>
    )
}

const estilos = StyleSheet.create({
    headerStyle:{
      height:120,
      backgroundColor:'#D9D9D9',
      borderBottomRightRadius:70,
      width:'100%',
      display:'flex',
      flexDirection:'row',
      alignItems:'center'
    },
    contenedorFlecha:{
        height:50,
        width:60,
        alignItems:'center',
        justifyContent:'center',
        marginLeft:10,
        marginTop:15
    },
    contenedorText:{
        height:70,
        justifyContent:'center',
        paddingLeft:10,
        alignItems:'center',
        marginTop:20,
        width:250
    },
    headerTitle:{
      fontSize:30,
      color:'#272F32',
      fontWeight:'700',
    },
    userTitle:{
        fontSize:20,
      color:'#272F32',
      fontWeight:'700',
    }
})