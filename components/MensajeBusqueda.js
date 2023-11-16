import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Asegúrate de instalar este paquete si no lo has hecho aún: expo install @expo/vector-icons

const MensajeBusqueda = ({texto}) => {
  return (
    <View style={styles.contenedor}>
      <Ionicons name="search" size={100} color="#D9D9D9" style={{opacity:0.7}} />
      <Text style={styles.texto}>{texto}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#8F8F8F',
    height:400,
    width:320,
    marginTop:40,
    borderRadius:30,
    padding:10
  },
  texto: {
    marginTop: 10,
    fontSize: 18,
    textAlign: 'center',
    color:'#fff'
  },
});

export default MensajeBusqueda;
