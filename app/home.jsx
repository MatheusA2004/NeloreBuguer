import { View, StyleSheet, Image, Pressable, Text } from "react-native";
import { HeaderHome } from "../components/headerHome";
import { LinearGradient } from 'expo-linear-gradient';


export default function telaHome() {
    return(
        <LinearGradient style={styles.tela} colors={['#701515', '#D02727']}>
            <HeaderHome />

            
        </LinearGradient>
    )
}


const styles = StyleSheet.create({
    
    tela:{
        backgroundColor: 'linear-gradient(180deg,rgba(112, 21, 21, 1) 0%, rgba(208, 39, 39, 1) 100%)',
        height: '100vh',
    },

   
});



