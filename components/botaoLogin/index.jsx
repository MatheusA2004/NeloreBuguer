import { Pressable, StyleSheet, Text } from "react-native";

export const BotaoLogin = ({ onPress, title }) => {
    return(
        <Pressable style={styles.btnLogar} onPress={onPress}>
            <Text style={styles.btnLogarText}>
                {title}
                
            </Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({

btnLogar: {
    backgroundColor: '#FFA801',
    borderRadius: '15px',
    border: 'solid 2px #111111',
    paddingHorizontal: 27,
    paddingVertical: 4,
  },

  btnLogarText: {
    color: '#000000ff',
    fontWeight: 'bold',
  },

});  