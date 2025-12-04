import EvilIcons from '@expo/vector-icons/EvilIcons';
import { router } from "expo-router";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { BotaoHeaderVoltar } from "../botaoHeaderVoltar";


export const HeaderHome = () => {
    return(
        <View style={styles.header}>
            <Image source={require('../../assets/images/logoHome.png')} style={styles.logoHeader}/>
            <Pressable style={styles.btnEndereco}>
                <EvilIcons name="location" size={24} color="#FFA801" />
                <Text style={styles.textoEndereco}>Endereço</Text>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={styles.barrinha}> | </Text>
                    <EvilIcons name="pencil" size={29} color="#FFA801" />
                </View>
            </Pressable>

            <BotaoHeaderVoltar  onPress={() => router.navigate('/home')}/>

        </View>
    )
}


const styles = StyleSheet.create({

     header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        alignItems: 'center',
        paddingTop: 10 ,
    },

    logoHeader:{
        width: '69px',
        height: '69px'
    },

    btnEndereco:{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 20,
        borderWidth: 2,
        borderColor: '#FFA801',
        backgroundColor: '#ffffffff',
        width: '194px',
        height: '33px',
    },

    textoEndereco:{
        color: '#FFA801',
        textAlign: 'center',
        fontSize: '10px',
        paddingLeft: '10px',
    },

    barrinha:{
        color: '#FFA801',
        fontSize: '25px',
        paddingBottom: '5px',
    },

    btnLogar: {
        backgroundColor: '#ffffffff',
        borderRadius: '15px',
        border: 'solid 2px #FFA801',
        paddingHorizontal: 27,
        paddingVertical: 4,
    },

  btnLogarText: {
    color: '#FFA801',
    fontWeight: 'bold',
  },

})