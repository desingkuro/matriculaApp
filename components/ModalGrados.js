import React, { useContext } from 'react';
import { Modal, View, ScrollView, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { contextoGeneral } from '../context/contexto';
import Grados from './Grados';

const ModalGrados = ({ visible, institucion, onClose , funcion}) => {
    const {institucionSelectionada,busquedaGrados}=useContext(contextoGeneral);
    console.log(busquedaGrados)
    return (
        <Modal transparent={false} animationType='slide' visible={visible}>
          <View style={estilos.modalContainer}>
              <View style={estilos.modalContent}>
              <Text style={estilos.textoTitulo}>{institucionSelectionada?institucionSelectionada.nombre_institucion:'no cargo'}</Text>
              <FlatList
                    style={estilos.scroll}
                    keyExtractor={(item)=>(item.ID_grado)}
                    data={busquedaGrados}
                    renderItem={({item})=>(
                        <Grados costo={item.costo} cupoActual={item.cupo_actual} descripcion={item.descripcion} cupoMaximo={item.cupo_maximo} nombreGrado={item.nombre_grado}/>
                    )}
                    initialNumToRender={15}
                    windowSize={5}
              />
              <TouchableOpacity style={estilos.botonCerrar} onPress={onClose}>
                  <Text style={estilos.textoBotonCerrar}>Cerrar</Text>
              </TouchableOpacity>
              </View>
          </View>
        </Modal>
    );
};

const estilos = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '95%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    maxHeight: '90%',
  },
  textoTitulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  botonCerrar: {
    marginTop: 20,
    backgroundColor: '#427D9D',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  textoBotonCerrar: {
    color: 'white',
    fontSize: 16,
  },
  scroll:{
    width:'100%',
    paddingBottom:5,
    paddingTop:5
},
});

export default ModalGrados;
