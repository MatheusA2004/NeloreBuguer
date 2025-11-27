import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';


import { StyleSheet, Text, View } from "react-native";

export const Menu = () => {
    return(
        <View style={styles.menu}>
            <View style={styles.button}>
                <Feather name="home" size={40} color="#FF0000" />
                <Text style={styles.buttonText}>Home</Text>
            </View>

            <View style={styles.button}>
                <AntDesign name="shopping-cart" size={40} color="#FFA801" />
                <Text style={styles.buttonText}>carrinho</Text>
            </View>

            <View style={styles.button}>
                <FontAwesome5 name="clipboard" size={40} color="#FFA801" />
                <Text style={styles.buttonText}>Pedidos</Text>
            </View>

            <View style={styles.button}>
               <MaterialIcons name="tag-faces" size={40} color="#FFA801" />
                <Text style={styles.buttonText}>Perfil</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    
    menu:{
       display: 'flex',
       flexDirection: 'row',
       backgroundColor: '#FFF',
       width: '100%',
       justifyContent: 'space-around',
       alignItems: 'center',
       height: '72px',
    },

    button:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

    buttonText:{
        fontWeight: 'bold',
    }
   
});