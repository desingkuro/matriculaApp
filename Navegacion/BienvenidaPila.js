import { createStackNavigator } from '@react-navigation/stack';
import { Bienvenida } from '../screens/Bienvenida';
import { SeleccionRegistro } from '../screens/SeleccionRegistro';
import { RegistroUsuario } from '../screens/RegistroUsuario';
import { InicioDeSesion } from '../screens/InicioDeSesion';

export const Stack = createStackNavigator();

export function BienvenidaPila(){
    return(
        <Stack.Navigator  initialRouteName='Bienvenida' >
          <Stack.Screen name="Bienvenida" component={Bienvenida} 
          options={{
              headerShown:false
            }}
          />
          <Stack.Screen name="Seleccion" component={SeleccionRegistro} 
          options={{
            headerShown:false
            }}
          />
          <Stack.Screen name="Registro" component={RegistroUsuario} 
          options={{
            headerShown:false
            }}
          />
          <Stack.Screen name="Login" component={InicioDeSesion} 
          options={{
            headerShown:false
            }}
          />
    </Stack.Navigator>
    )
}