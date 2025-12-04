import { StyleSheet, View } from "react-native";
import { HeaderHome } from "../components/headerBurgues";
import { Menu } from '../components/menu';
import { MenusHamburguer } from "../components/menusHamburguer";

export default function Artesanais() {
    return(
        <View style={styles.tela}>
            <HeaderHome />

            <MenusHamburguer 
                titulo="batatas"
            />

            <Menu />

        </View>
    )
}

const styles = StyleSheet.create({
    
    tela:{
        height: '100vh',
        backgroundColor: '#E8E8E8',
        display: 'flex',
        justifyContent: 'space-between'
    },

   
   
});
