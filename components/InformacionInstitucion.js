import React, { useContext } from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';
import { contextoGeneral } from '../context/contexto';

const InformacionInstitucion = ({ institucion , funcion}) => {
    const {setInstitucionSelectionada,setModalInstitucion,
      busquedaGrados,setBusquedaGrados}=useContext(contextoGeneral);

    function selecionarInstitucion(){
        setInstitucionSelectionada(institucion);
        setModalInstitucion(true);
        const filtrado = funcion();
        setBusquedaGrados(filtrado);
    }

    return (
        <TouchableOpacity style={styles.contenedor} onPress={selecionarInstitucion}>
            <Text style={styles.textoTitulo}>{institucion.nombre_institucion}</Text>
            <Text style={styles.texto}>Dirección: {institucion.Direccion}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: '#D9D9D9',
    padding: 10,
    borderRadius: 5,
    margin: 10,
    height:90,
    width:'90%',
    justifyContent:'center'
  },
  texto: {
    color: '#272F32',
    fontSize: 16,
    marginBottom: 5,
    color:'#427D9D',
    fontWeight:'500'
  },
  textoTitulo:{
    color: '#272F32',
    fontSize: 22,
    marginBottom: 5,
    fontWeight:'700'
  }
});

export default InformacionInstitucion;
