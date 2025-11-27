import { Image, StyleSheet, Text, View } from "react-native";

export const Cards = ({titulo, lanche, descricao, onPress}) => {
    return(
        <View style={styles.burguerCards}>
            <Text style={styles.burguerCardsTitulo} onPress={onPress}>{titulo}</Text>
            <Image source={require('../../assets/images/fotoCards.png')} style={styles.fotoCards} />
            <Text style={styles.burguerCardsLanche}>{lanche}</Text>
            <Text style={styles.burguerCardsDescricao}>{descricao}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
     burguerCards:{
        width: '336px',
        backgroundColor: '#FFFFFF',
        height: '311px',
        borderRadius: 22,
        paddingLeft: '20px',
        marginTop: '25px',
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
})