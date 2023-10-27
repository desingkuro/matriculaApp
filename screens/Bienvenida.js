import { View,Text,StyleSheet, ImageBackground,TouchableOpacity } from "react-native";
import imagenBackground from '../assets/img/fondo.png'; // Import the image directly

import { Boton } from "../components/Boton";
import { AntDesign } from '@expo/vector-icons';


export function Bienvenida({navigation}){

    function nextScreen(){
        navigation.navigate('Seleccion');
    }

    return(
        <View style={estilos.containerView}>
            <ImageBackground source={imagenBackground} resizeMode="cover" style={estilos.imgBackground}>
                <View style={estilos.containerBienvenida}>
                    <View style={estilos.header}>
                        <Text style={estilos.textHeader}>Social</Text>
                    </View>
                    <View style={estilos.presentacion}>
                        <Text style={estilos.textPresentacion}>
                            Comienza un nuevo año 
                            escolar y encuentar tu lugar en el mundo
                        </Text>
                    </View>
                    <View style={estilos.seccionInicio}>
                        <View style={estilos.contenedorTextInicio}>
                            <Text style={estilos.textInicio}>
                                Inicia sesion si ya eres usuario, de no ser asi puedes registrarte
                            </Text>
                        </View>
                        <Boton color={'oscuro'} texto={'Iniciar Sesion'} funcion={()=>{}}/>
                        <TouchableOpacity style={estilos.contTextCrearCuenta} onPress={nextScreen}>
                            <Text style={estilos.textCrearCuenta}>
                                O crea tu cuenta 
                            </Text>
                            <AntDesign name="arrowright" size={34} color="black" style={estilos.flecha}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}

const estilos = StyleSheet.create({
    containerView:{
        flex:1,
        alignItems:'center',
        paddingTop:40,
    },
    containerBienvenida:{
        height:'100%',
        width:'100%',
        backgroundColor:'rgba(39, 47, 50, 0.5)',
    },
    imgBackground:{
        flex: 1,
        width:'100%',
        justifyContent: 'center',
        height:'100%'
    },
    header:{
        height:40,
        width:'100%',
        padding:10,
    },
    textHeader:{
        color:'white',
        opacity:.7
    },
    presentacion:{
        height:400,
        width:'100%',
        top:80,
        alignItems:'center',
        justifyContent:'center',
        padding:30
    },
    textPresentacion:{
        color:'white',
        fontSize:25,
        fontWeight:'700',
        opacity:0.7
    },
    seccionInicio:{
        height:300,
        backgroundColor:'#D9D9D9',
        marginTop:50,
        borderTopRightRadius:100,
        alignItems:'center'
    },
    contenedorTextInicio:{
        height:100,
        marginTop:40,
        paddingLeft:10,
        paddingRight:30,
        alignItems:'center',
        justifyContent:'center'
    },
    textInicio:{
        color:'rgba(39, 47, 50, 1)',
        fontSize:20
    },
    contTextCrearCuenta:{
        marginTop:30,
        left:80,
        height:40,
        alignItems:'center',
        width:200,
        justifyContent:'center',
        flexDirection:'row',
        gap:10
    },
    textCrearCuenta:{
        fontSize:16,
        color:'rgba(39, 47, 50, 1)',
    },
    flecha:{

    }
})