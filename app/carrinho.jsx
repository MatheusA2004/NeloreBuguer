import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, View } from "react-native";
import { HeaderHome } from "../components/headerBurgues";

export default function Carrinho(){
    return(
        <LinearGradient style={styles.tela} colors={['#701515', '#D02727']}>
            <HeaderHome /> 

            <View style={styles.endereco}>
                <Text style={styles.texto1}>Endereço</Text>
                <Text style={styles.texto2}>Laranjeiras, R. Soares Cabral n°8 / 104</Text>
            </View>
            


            <View style={styles.card}>

                 <Text>Carrinho</Text>          


            </View>

        </LinearGradient>
    )
}


const styles = StyleSheet.create({
    tela:{
        height: '100vh',
        display: 'flex',
        justifyContent: 'space-between'
    },

    card:{
        backgroundColor: '#fff',
        height: '649px',
        width: '100%',
        borderTopLeftRadius: 22,
        borderTopRightRadius: 22,
        display: 'flex',
        justifyContent: 'center',
    },

    endereco:{
        width: '350px',
        marginLeft: '30px'
    },

    texto1:{
        color: '#FFA801',
        fontWeight: 'bold',
        fontSize: '30px'
    },

    texto2:{
        color: '#fff',
        fontWeight: 'bold',
        fontSize: '25px'
    }

});