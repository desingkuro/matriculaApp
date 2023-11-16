import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Inicio } from "../screens/Inicio";
import { Matricula } from "../screens/Matricula";
import { useContext, useEffect } from "react";
import { View,Text, Modal, StyleSheet,TouchableOpacity, Alert } from 'react-native';
import { contextoGeneral } from "../context/contexto";
import {BienvenidaPila} from "../Navegacion/BienvenidaPila"
import { AntDesign, Ionicons, Feather, FontAwesome } from '@expo/vector-icons';
import { Configuracion } from "../screens/Configuracion";
import { InformacionPerfil } from "../components/InformacionPerfil";
import { Boton } from "../components/Boton";





const Tab = createBottomTabNavigator();

export function BarraInferior(){

    const {usuarioActivo,perfil, setPerfil,datos, setDatos} = useContext(contextoGeneral);
    useEffect(()=>{
        presentarContenido();
    },[usuarioActivo]);
    function presentarContenido(){
        if(!usuarioActivo){
            return(
              <>
                <BienvenidaPila>
                </BienvenidaPila>
              </>
              )
            }
        return(
            <>
                <Tab.Navigator initialRouteName="Inicio">
                    <Tab.Screen name="Matricula" component={Matricula}
                        options={{
                            headerShown:false,
                            tabBarIcon:()=>{
                                return <Ionicons name="school-outline" size={24} color="black" />
                                }
                        }}
                    />
                    <Tab.Screen name="Inicio" component={Inicio}
                        options={{
                            headerShown:false,
                            tabBarIcon:()=>{
                                return <AntDesign name="home" size={24} color="black" />
                                }
                            }
                        }
                    />
                    <Tab.Screen name="Configuraciones" component={Configuracion}
                        options={{
                            headerShown:false,
                            tabBarIcon:()=>{
                                return <AntDesign name="setting" size={24} color="black" />
                                }
                            }
                        }
                    />
                </Tab.Navigator>
            </>
        )
    }

    return(
        <>
            {presentarContenido()}
            <Modal
                visible={perfil}
                animationType="slide"
                style={estilos.Modal}
            >
                <View style={estilos.containerModal}>
                    <TouchableOpacity style={estilos.btnBack} onPress={()=>{setPerfil(false)}}>
                        <Feather name="arrow-left" size={54} color="black" />
                    </TouchableOpacity>
                    <View style={estilos.fotoPerfil}>
                        <FontAwesome name="user-circle" size={170} color="#D9D9D9" />
                    </View>
                    <InformacionPerfil datos={datos?datos.nombre:'nombre no cargado'} key={0}/>
                    <InformacionPerfil datos={datos?datos.usuario:'correo no cargado'} key={1}/>
                    <InformacionPerfil datos={datos?datos.estado:'estado no cargado'} key={2}/>
                    <InformacionPerfil datos={datos?datos.institucion:'escuela no cargado'} key={3} />
                    <View style={{marginTop:30,width:300,justifyContent:'center',alignItems:'center'}}>
                        <Boton texto={'Edital informacion'} color={'oscuro'} funcion={()=>{Alert.alert('se editara la informacion')}}/>
                    </View>
                </View>
            </Modal>
        </>
    )
}
const estilos = StyleSheet.create({
    Modal:{
        backgroundColor:'#D9D9D9'
    },
    containerModal:{
        flex:1,
        alignItems:'center',
        position:'relative',
        backgroundColor:'#D9D9D9'
    },
    btnBack:{
        height:60,
        width:60,
        alignItems:'center',
        justifyContent:'center',
        position:'absolute',
        top:10,
        left:10
    },
    fotoPerfil:{
        height:180,
        width:180,
        backgroundColor:'#272F32',
        borderRadius:100,
        marginTop:70,
        justifyContent:'center'
        ,alignItems:'center',
        marginBottom:20
    }
})