import { View, StyleSheet, Image, Pressable, Text } from "react-native";
import EvilIcons from '@expo/vector-icons/EvilIcons';
import Ionicons from '@expo/vector-icons/Ionicons';

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

            <Ionicons name="notifications" size={24} color="#FFA801" />

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
        backgroundColor: '#FF0000',
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
    }
})