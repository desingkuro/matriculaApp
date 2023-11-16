import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Grados = ({ nombreGrado, descripcion, costo, cupoMaximo, cupoActual }) => {
  console.log(nombreGrado)
  return (
    <View style={estilos.contenedor}>
      <Text style={estilos.textoTitulo}>{nombreGrado}</Text>
      <Text style={estilos.texto}>Descripción: {descripcion}</Text>
      <Text style={estilos.texto}>Costo: ${costo}</Text>
      <Text style={estilos.texto}>Cupo Máximo: {cupoMaximo}</Text>
      <Text style={estilos.texto}>Cupo Actual: {cupoActual}</Text>
    </View>
  );
};

const estilos = StyleSheet.create({
  contenedor: {
    backgroundColor: '#D9D9D9',
    padding: 5,
    borderRadius: 5,
    margin: 10,
    height: 160,
    width: 300,
    justifyContent: 'center',
  },
  texto: {
    color: '#272F32',
    fontSize: 16,
    marginBottom: 5,
    color: '#427D9D',
    fontWeight: '500',
  },
  textoTitulo: {
    color: '#272F32',
    fontSize: 22,
    marginBottom: 5,
    fontWeight: '700',
  },
});

export default Grados;
