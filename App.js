import { StatusBar } from 'expo-status-bar';
import { BarraInferior } from './Navegacion/BarraInferior';
import { NavigationContainer } from '@react-navigation/native';
import { Contexto } from './context/contexto';

export default function App() {
  
  return (
    <>
      <Contexto>
        <StatusBar animated hideTransitionAnimation='fade'></StatusBar>
        <NavigationContainer>
          <BarraInferior/>
        </NavigationContainer>
      </Contexto>
    </>
  );
}

