import { LinearGradient } from 'expo-linear-gradient';
import { router } from "expo-router";
import { useState } from 'react';
import { Image, Pressable, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { HeaderHome } from "../components/headerBurgues";
import { Ingredientes } from '../components/ingredientes';
import { RadioButton } from '../components/radioButton';

export default function Hamburguer(){

    const [contador, setContador] = useState(0);
        
          const incrementar = () => {
            setContador(contador + 1);
          };
        
          const decrementar = () => {
            setContador(contador - 1);
          };


    return(
        <LinearGradient style={styles.tela} colors={['#701515', '#D02727']}>
            <HeaderHome /> 

            <View style={styles.card}>
                <ScrollView style={styles.scroll}>
                    <Text style={styles.tituloHambuguer}>NELORE BURGUER</Text>

                    <Image source={require('../assets/images/hamburguerEdit.png')} style={styles.imagemEdit}/>

                    <View style={styles.descricao}>
                        <Text style={styles.tituloDescricao}>Descrição</Text>
                        <Text style={styles.descricaoProduto}>Morem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.</Text>
                    </View>

                    <View style={styles.obrigatorios}>
                        <Text style={styles.tituloObrigatorios}>Como você prefere ?</Text>
                        <Text style={styles.tagObrigatorios}>OBRIGATÓRIO</Text>
                    </View>

                    <View style={styles.obrigatorio1}>
                        <Text style={styles.tituloObrigatorio1}>Pao Australiano</Text>
                        <RadioButton />
                    </View>

                    <View style={styles.obrigatorios}>
                        <Text style={styles.tituloObrigatorios}>Como você prefere ?</Text>
                        <Text style={styles.tagObrigatorios}>OBRIGATÓRIO</Text>
                    </View>

                    <Ingredientes 
                        ingrediente={'carne'}
                    /> 

                    <Ingredientes 
                        ingrediente={'alface'}
                    /> 

                    <Ingredientes 
                        ingrediente={'queijo'}
                    /> 

                    <Ingredientes 
                        ingrediente={'tomate'}
                    /> 

                    <Ingredientes 
                        ingrediente={'molho'}
                    /> 


                    <View style={styles.obs}>
                        <Text style={styles.textoObs}>Alguma Observação</Text>
                        <TextInput type="text" placeholder="Ex: Sem cebola, maionese, etc..." style={styles.inputs}/>
                    </View>

                    <View style={styles.adicionarQuantidade}>

                        <View style={styles.botoesContainer}>
                            <TouchableOpacity style={styles.botao} onPress={decrementar}>
                            <Text style={styles.textoBotao}>-</Text>
                            </TouchableOpacity>
            
                            <Text style={styles.numero}>{contador}</Text>
            
                            <TouchableOpacity style={[styles.botao, styles.botaoIncrementar]} onPress={incrementar}>
                            <Text style={styles.textoBotao2}>+</Text>
                            </TouchableOpacity>
                        </View>

                        <Pressable style={styles.adicionar}>
                            <Text style={styles.adicionarText} onPress={() => router.navigate('/carrinho')}>Adicionar ao carrinho</Text>
                        </Pressable>
                    </View>
                    
                </ScrollView>
                
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
        backgroundColor: '#fff',
        height: '729px',
        width: '100%',
        borderTopLeftRadius: 22,
        borderTopRightRadius: 22,
        display: 'flex',
        justifyContent: 'center',
    },

    tituloHambuguer:{
        marginTop: '30px',
        fontWeight: 'bold',
        fontSize: '30px'
    },

    descricao:{
        width: '346px'
    },

    tituloDescricao:{
        fontWeight: 'bold',
        fontSize: 30,
        marginTop: '10px'
    },

    descricaoProduto:{
        fontSize: 20,
        marginTop: '20px',

    },

    obrigatorios:{
        backgroundColor: '#D9D9D9',
        width: '100%',
        height: '93px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: '40px'
    },

    tituloObrigatorios: {
        color: '#5B5B5B',
        fontWeight: 'bold',
        fontSize: '20px'
    },

    tagObrigatorios: {
        backgroundColor: '#000000ff',
        color: '#fff',
        width: '117px',
        height: '25px',
        textAlign: 'center',
        paddingTop: '3px',
        fontWeight: 'bold',
        borderRadius: '10px'
    },

    scroll:{
        width: '100%',
    },

    obrigatorio1:{
        width: '100%',
        height: '70px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },

    tituloObrigatorio1:{
        color: '#5B5B5B',
        fontWeight: 'bold',
        fontSize: '15px'
    },

    obs:{
        height: '120px',
        display: 'flex',
        alignItems: 'center',
        marginTop: '20px'
    },

    inputs:{
        border: '1px solid #6e6e6eff',
        width: '370px',
        height: '70px'
    },

    adicionar:{
        backgroundColor: '#701515',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: '40px'
    },

    adicionarQuantidade:{
        display: 'flex',
        justifyContent: 'space-around',
        flexDirection: 'row',
        marginBottom: '70px',
        marginTop: '40px'
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
    },

    adicionarText:{
        color: '#FFA801'
    }




   
   
});
