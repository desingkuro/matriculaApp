import { View,StyleSheet,Text } from "react-native";

export function InformacionPerfil({datos}){
    return(
        <View style={estilos.container}>
            <Text style={estilos.textStyle}>
                {datos=='Activo'?'Activo':datos}
            </Text>
        </View>
    )
}
const estilos = StyleSheet.create({
    container:{
        height:70,
        width:300,
        backgroundColor:'#D9D9D9',
        marginBottom:20,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:15,

        shadowColor: "#000000",
        shadowOffset: {
        width: 0,
        height: 3,
        },
        shadowOpacity:  0.17,
        shadowRadius: 3.05,
        elevation: 4
    },
    textStyle:{
        fontSize:25,
        fontWeight:'600'
    }
})