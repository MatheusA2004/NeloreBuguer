import { LinearGradient } from 'expo-linear-gradient';
import { router } from "expo-router";
import { ScrollView, StyleSheet, View } from "react-native";
import { Cards } from "../components/cards";
import { HeaderHome } from "../components/headerHome";
import { Menu } from '../components/menu';

export default function telaHome() {
    return(
        <LinearGradient style={styles.tela} colors={['#701515', '#D02727']}>
            <HeaderHome />
            
            

            <View style={styles.card}>
                <ScrollView style={styles.scroll}>
                    <Cards 
                        onPress={() => router.navigate('/artesanais')}
                        titulo="Artesanais"
                        lanche="Nelore Cheddar"
                        descricao="Pão a sua escolha, blend da casa 180g, cheddar cremoso e cebola"
                    />

                    <Cards 
                        onPress={() => router.navigate('/tradicionais')}
                        titulo="Tradicionais"
                        lanche="Nelore Cheddar"
                        descricao="Pão a sua escolha, blend da casa 180g, cheddar cremoso e cebola"
                    />

                    <Cards 
                         onPress={() => router.navigate('/batatas')}
                        titulo="Batatas"
                        lanche="Nelore Cheddar"
                        descricao="Pão a sua escolha, blend da casa 180g, cheddar cremoso e cebola"
                    />

                    <Cards 
                         onPress={() => router.navigate('/petiscos')}
                        titulo="Petiscos"
                        lanche="Nelore Cheddar"
                        descricao="Pão a sua escolha, blend da casa 180g, cheddar cremoso e cebola"
                    />
                </ScrollView>

                <Menu />
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
        top: -53,
        borderRadius: 22,
    },
   
});



