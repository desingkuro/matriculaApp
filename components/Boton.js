import { TouchableOpacity,Text, StyleSheet } from "react-native";

export function Boton({funcion,texto,color}){
    return(
        <TouchableOpacity onPress={()=>funcion()} style={color=='oscuro'?estilos.btnOscuro:estilos.btnClaro}>
            <Text style={color == 'oscuro'?estilos.textoClaro:estilos.textoOscuro}>
                {texto}
            </Text>
        </TouchableOpacity>
    )
}

const estilos = StyleSheet.create({
    btnOscuro:{
        height:60,
        width:300,
        backgroundColor:'rgba(39, 47, 50, 1)',
        marginLeft:20,
        borderRadius:20,
        alignItems:'center',
        justifyContent:'center'
    },
    btnClaro:{
        height:60,
        width:300,
        backgroundColor:'#D9D9D9',
        marginLeft:20,
        borderRadius:20,
        alignItems:'center',
        justifyContent:'center'
    },
    textoClaro:{
        color:'#D9D9D9',
        fontSize:20,
        fontWeight:'900'
    },
    textoOscuro:{
        color:'rgba(39, 47, 50, 1)',
        fontSize:20,
        fontWeight:'900'
    },
})