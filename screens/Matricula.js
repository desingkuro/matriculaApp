import { View ,Text, StyleSheet,ScrollView, FlatList,Modal, ActivityIndicator} from "react-native";
import { HeaderTabNavigation } from "../components/HeaderTabNavigation";
import { useContext, useEffect, useState } from "react";
import { contextoGeneral } from "../context/contexto";
import { BarraBusqueda } from "../components/BarraDeBusqueda";
import MensajeBusqueda from "../components/MensajeBusqueda";
import InformacionInstitucion from "../components/InformacionInstitucion";
import ModalGrados from "../components/ModalGrados";

export function Matricula(){
    const {datos,instituciones, setInstituciones,setGrado,grados,
        medalInstitucion,setModalInstitucion,listFilter,institucionSelectionada,
        busquedaGrados,setBusquedaGrados} = useContext(contextoGeneral);
    const [cargando, setCargando] = useState(false);
    

    async function getInstituciones(){
        try{
            setCargando(true)
            await fetch('https://andlicona.pythonanywhere.com/getInstituciones')
                .then(data=>data.json())
                .then(data=>{
                    const listado = data;
                    setInstituciones(listado)
                    });
            setCargando(false)
        }catch(erro){
            console.error(erro);
        }
    }
    async function obtenerGrados(){
        try{
            await fetch('https://andlicona.pythonanywhere.com/getGrados')
                .then(data=>data.json())
                .then(data=>{
                    const listado = data;
                    setGrado(listado);
                    });
                    console.log(grados)
        }catch(erro){
            console.error(erro);
        }
    }
    
    useEffect(()=>{
        getInstituciones();
        obtenerGrados();
    },[]);

    function onClose(){
        setModalInstitucion(false)
    }

    function renderMensajeBusqueda(){
        if(!listFilter){
            return(
                <MensajeBusqueda texto={'Buscar Institución'}/>
            )
        }else if(listFilter.length === 0){
            return(
                <MensajeBusqueda texto={'institucion no encontrada'}/>
            )
        }else{
            return <FlatList
                    style={estilos.scroll}
                    keyExtractor={(item)=>(item.ID_institucion)}
                    data={listFilter}
                    renderItem={({item})=>(
                        <InformacionInstitucion institucion={item} key={item.ID_institucion} funcion={filtrarGrados}/>
                    )}
                    initialNumToRender={15}
                    windowSize={5}
                />
        }
    }

    function funcionBusqueda(value){
        const lowerCaseValue = value.toLowerCase(); 
    
        if(value!=='' || value!==' '){
            return instituciones.instituciones.reduce((filteredCounts, insti) => {
                const institucionMatch = insti.nombre_institucion.toLowerCase().includes(lowerCaseValue);
                if (institucionMatch) {
                    filteredCounts.push(insti);
                }
                return filteredCounts;
            }, []);
        }

    }
    function filtrarGrados(){
       if(instituciones!=null){
            const filtrados = grados.grados.filter((item)=>{
                return item.ID_institucion == institucionSelectionada.ID_institucion
            })
            return(filtrados)
       }else{
            return[]
       }
    }


    return(
        <View style={estilos.containerPrincipal}>
            <HeaderTabNavigation texto={'Matricula'} userName={datos ?datos.nombre : 'nombre no cargado'}/>
            <BarraBusqueda funcion={funcionBusqueda}/>
            {renderMensajeBusqueda()}
            <ModalGrados grados={grados} institucion={instituciones} onClose={onClose} visible={medalInstitucion}/>
            <Modal
                transparent={true}
                animationType='fade'
                visible={cargando}
            >
                <View style={estilos.modalContainer}>
                    <ActivityIndicator size='large' color='#0000ff' />
                </View>
            </Modal>
        </View>
    )
}
const estilos = StyleSheet.create({
    containerPrincipal:{
        flex:1,
        backgroundColor:'#272F32',
        alignItems:'center'
    },
    containerScroll:{
        height:560,
        width:'100%',
        padding:10,
    },
    scroll:{
        height:550,
        width:'100%',
        padding:10,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
      },
})