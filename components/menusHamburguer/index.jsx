import { router } from "expo-router";
import { Image, StyleSheet, Text, View } from "react-native";

export const MenusHamburguer = ({titulo}) => {
    return(
        <View>
            <Text style={styles.titulo}>{titulo}</Text>

            <View style={styles.fileira}>
                <View style={styles.cards}>
                    <Text style={styles.textoCards}  onPress={() => router.navigate('/hamburguer')}>Burguer1</Text>
                    <Image source={require('../../assets/images/imagemCarrossel.png')} style={styles.imagemCard}/>
                </View>
                <View style={styles.cards}>
                    <Text style={styles.textoCards} onPress={() => router.navigate('/hamburguer')}>Burguer2</Text>
                    <Image source={require('../../assets/images/imagemCarrossel.png')} style={styles.imagemCard}/>
                </View>
            </View>
            
            <View style={styles.fileira}>
                <View style={styles.cards}>
                    <Text style={styles.textoCards} onPress={() => router.navigate('/hamburguer')}>Burguer3</Text>
                    <Image source={require('../../assets/images/imagemCarrossel.png')} style={styles.imagemCard}/>
                </View>
                <View style={styles.cards}>
                    <Text style={styles.textoCards} onPress={() => router.navigate('/hamburguer')}>Burguer4</Text>
                    <Image source={require('../../assets/images/imagemCarrossel.png')} style={styles.imagemCard}/>
                </View>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    
    cards:{
        backgroundColor: '#D02727',
        width: '185.93px',
        height: '266px',
        borderRadius: '26px',
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center'
    },

    titulo:{
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: '40px',
        textAlign: 'center'
    },

    imagemCard:{
        width: '193px',
        height: '160px'
    },

    fileira:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: '15px'
    },

    textoCards:{
        fontWeight: 'bold',
        fontSize: '30px',
        color: '#FFA801',
        marginLeft: '10px'
    }



   
   
});
