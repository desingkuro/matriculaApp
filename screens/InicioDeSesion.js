import { View, StyleSheet, TextInput, TouchableOpacity, Text, Alert, Modal,ActivityIndicator } from "react-native";
import { HeaderScreen } from "../components/HeaderScreen";
import { Boton } from "../components/Boton";
import { useContext, useState } from "react";
import { contextoGeneral } from "../context/contexto";

export function InicioDeSesion({ navigation }) {
    const [cargando, setCargando] = useState(false);
    const [error, setError] = useState(null);
    const [user, setUser] = useState(null);
    const [password, setPasword] = useState(null);

    const {usuarioActivo,SetUsuarioActivo,datos, setDatos}=useContext(contextoGeneral);

    function bak() {
        navigation.goBack();
    }
    function next() {
        SetUsuarioActivo(true);
    }

    async function getUser() {      
        if (user !== null && password !== null) {
          if (user !== ' ' && password !== ' ') {
            try {
                setCargando(true);
                console.log('entro')
                const datosUser = {
                    'usuario': user,
                    'password': password
                };
                const cabecera = {
                    'Content-Type': 'application/json'
                };      
                await fetch('https://andlicona.pythonanywhere.com/loginUser',{
                    method:'POST',
                    headers:cabecera,
                    body:JSON.stringify(datosUser)
                })
                .then(d=>d.json())
                .then(data=>{
                    if(data.access == true){
                        setDatos(data);
                        console.log(data); 
                        setCargando(false);
                        next();
                    }else{
                        setCargando(false);
                        Alert.alert('Su usuario o contraseña son incorrectos, por favor verifique su informacion');
                        setUser('');
                        setPasword('');
                    }
                });
                } catch (error) {
                    setError(error.message);
                }
            } else {
                Alert.alert('Debe llenar todos los campos para iniciar sesión');
            }
        } else {
          Alert.alert('Debe llenar todos los campos para iniciar sesión');
        }
      } 
      
    

    return (
        <View style={estilos.pantallaPrincipal}>
            <HeaderScreen texto={'Bienvenido de vuelta'} funcion={bak} />
            <View style={estilos.formContainer}>
                <TextInput style={estilos.inputText}
                    placeholder="Ingrese su usuario"
                    placeholderTextColor={'#E2E0DB'}
                    onChangeText={(e) => { setUser(e) }}
                    value={user}
                />
                <TextInput style={estilos.inputText}
                    placeholder="Ingrese su Contraseña"
                    placeholderTextColor={'#E2E0DB'}
                    onChangeText={(e) => { setPasword(e) }}
                    value={password}
                />
                <Boton color={'claro'} texto={'Iniciar Sesion'} funcion={getUser} />
                <TouchableOpacity style={estilos.botonRecuperarContraseña}>
                    <Text style={estilos.textBoton}>Recuperar contraseña</Text>
                </TouchableOpacity>
            </View>
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
    pantallaPrincipal: {
        flex: 1,
        backgroundColor: '#272F32',
        alignItems: 'center',
        position: 'relative'
    },
    formContainer: {
        height: 600,
        width: 380,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20
    },
    inputText: {
        height: 40,
        width: '90%',
        borderBottomColor: '#E4E1DE',
        borderBottomWidth: 3,
        color: '#E2E0DB',
        marginBottom: 10,
        fontSize: 20,
        fontWeight: '600',
        padding: 10
    },
    botonRecuperarContraseña: {
        height: 40,
        width: 150,
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingRight: 5,
        position: 'absolute',
        right: 0,
        top: '70%'
    },
    textBoton: {
        fontSize: 14,
        fontWeight: '600',
        color: '#E2E0DB',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
      },
})