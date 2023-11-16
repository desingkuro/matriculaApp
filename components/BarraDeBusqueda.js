import React, { useContext, useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Asegúrate de instalar este paquete si no lo has hecho aún: expo install @expo/vector-icons
import { contextoGeneral } from '../context/contexto';

export const BarraBusqueda = ({ funcion }) => {
  const [textoBusqueda, setTextoBusqueda] = useState('');
  const {setListFilter} = useContext(contextoGeneral);

  function changeValue(val){
    setTextoBusqueda(val)
    const listaFiltrada = funcion(val);
    setListFilter(listaFiltrada)
}

  return (
    <View style={styles.contenedor}>
      <TextInput
        style={styles.input}
        placeholder="Buscar..."
        onChangeText={(texto) => changeValue(texto)}
        value={textoBusqueda}
        placeholderTextColor={'#D9D9D9'}
      />
      <Ionicons
        name="search"
        size={24}
        color="#D9D9D9"
        onPress={funcion}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    margin: 10,
    borderBottomWidth:3,
    borderColor:'#D9D9D9',
    width:'90%',
    marginTop:20
},
input: {
    flex: 1,
    marginRight: 10,
    color:'#D9D9D9',
    fontSize:20
  },
});

