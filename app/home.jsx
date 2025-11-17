import { View, StyleSheet, Image, Pressable, Text } from "react-native";
import { HeaderHome } from "../components/headerHome";
import { LinearGradient } from 'expo-linear-gradient';


export default function telaHome() {
    return(
        <LinearGradient style={styles.tela} colors={['#701515', '#D02727']}>
            <HeaderHome />

            <View style={styles.card}>
                <View style={styles.scroll}>
                    <View style={styles.burguerCards}>
                        <Text style={styles.burguerCardsTitulo}>Artesanais</Text>
                        <Image source={require('../assets/images/fotoCards.png')} style={styles.fotoCards} />
                        <Text style={styles.burguerCardsLanche}>Nelore Cheddar</Text>
                        <Text style={styles.burguerCardsDescricao}>Pão a sua escolha, blend da casa 180g, cheddar cremoso e cebola</Text>
                    </View>
                </View>
                
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
        backgroundColor: '#E8E8E8',
        height: '528px',
        borderTopLeftRadius: 22,
        borderTopRightRadius: 22,
        display: 'flex',
        alignItems: 'center',
    },

    scroll:{
        position: 'absolute',
        top: -50,
    },

    burguerCards:{
        width: '336px',
        backgroundColor: '#FFFFFF',
        height: '311px',
        borderRadius: 22,
        paddingLeft: '20px',
    },

    burguerCardsTitulo:{
        fontSize: '30px',
        fontWeight: 'bold',
        marginTop: '10px',
    },

    fotoCards:{
        width: '270px',
        height: '101px',
        borderRadius: 15,
        marginTop: '50px',
        marginLeft: '13px',
    },

    burguerCardsLanche:{
        marginTop: '15px',
        fontSize: '17px',
        fontWeight: 'bold',
        marginLeft: '13px',
    },

    burguerCardsDescricao:{
        fontSize: '12px',
        color:'#FFA801',
        width: '210px',
        marginLeft: '13px'
    }




   
});



