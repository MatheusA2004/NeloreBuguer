import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export const Ingredientes = ({ingrediente}) => {

    const [contador, setContador] = useState(0);
    
      const incrementar = () => {
        setContador(contador + 1);
      };
    
      const decrementar = () => {
        setContador(contador - 1);
      };


    return(
        <View style={styles.ingredientes}>
            <Text style={styles.ingrediente}>{ingrediente}</Text>
            
            <View style={styles.botoesContainer}>
                <TouchableOpacity style={styles.botao} onPress={decrementar}>
                <Text style={styles.textoBotao}>-</Text>
                </TouchableOpacity>

                <Text style={styles.numero}>{contador}</Text>

                <TouchableOpacity style={[styles.botao, styles.botaoIncrementar]} onPress={incrementar}>
                <Text style={styles.textoBotao2}>+</Text>
                </TouchableOpacity>
            </View>
            

        </View>
    )
}


const styles = StyleSheet.create({

    ingredientes:{
        width: '100%',
        height: '70px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderBottomWidth: '1px',
        borderBottomColor: '#b6b6b6ff'
    },

    ingrediente:{
        color: '#5B5B5B',
        fontWeight: 'bold',
        fontSize: '15px'
    },

    botoesContainer:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '90px'
    },

    textoBotao:{
        fontSize: '30px'
    },

    numero:{
        fontSize: '18px'
    },

    textoBotao2:{
        fontSize: '30px',
        color: '#ec4f4fff'
    }
     
})