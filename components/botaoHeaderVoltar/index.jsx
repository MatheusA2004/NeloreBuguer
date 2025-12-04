import { Pressable, StyleSheet, Text, View } from "react-native";

export const BotaoHeaderVoltar = ({onPress}) => {
    return(
        <View>
            <Pressable style={styles.btnLogar}><Text style={styles.btnLogarText} onPress={onPress}>Voltar</Text></Pressable>
        </View>
    )
}


const styles = StyleSheet.create({
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