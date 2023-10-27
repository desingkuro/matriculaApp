import { AntDesign } from '@expo/vector-icons';
import { View,Text,StyleSheet, TouchableOpacity } from "react-native";

export function HeaderScreen({texto,funcion}){
    return(
        <View style={estilos.headerStyle}>
            <TouchableOpacity style={estilos.contenedorFlecha} onPress={funcion}>
                <AntDesign name="arrowleft" size={40} color="#272F32"/>
            </TouchableOpacity>
            <View style={estilos.contenedorText}>
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
    },
    contenedorText:{
        height:70,
        justifyContent:'center',
        paddingLeft:10
    },
    headerTitle:{
      fontSize:26,
      color:'#272F32',
      fontWeight:'700',
    }
})