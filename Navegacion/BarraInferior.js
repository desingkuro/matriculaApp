import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Inicio } from "../screens/Inicio";
import { Matricula } from "../screens/Matricula";
import { useContext, useEffect } from "react";
import { View,Text } from 'react-native';
import { Contexto, contextoGeneral } from "../context/contexto";
import { Bienvenida } from "../screens/Bienvenida";
import {BienvenidaPila} from "../Navegacion/BienvenidaPila"


const Tab = createBottomTabNavigator();

export function BarraInferior(){

    const {usuarioActivo,SetUsuarioActivo} = useContext(contextoGeneral);
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
                <Tab.Navigator>
                    <Tab.Screen name="Matricula" component={Matricula}/>
                    <Tab.Screen name="Inicio" component={Inicio}/>
                </Tab.Navigator>
            </>
        )
    }

    return(
        <>
            {presentarContenido()}
        </>
    )
}