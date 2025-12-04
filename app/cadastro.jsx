import { View, StyleSheet, Image, Pressable, Text, TextInput } from "react-native";
import { LoginAlt } from "../components/loginsAlt";
import { BotaoLogin } from "../components/botaoLogin";
import { router } from "expo-router";
import EvilIcons from '@expo/vector-icons/EvilIcons';
import { useState } from "react";

export default function telaCadastro () {

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [restauranteId, setRestauranteId] = useState("");
    const [mensagem, setMensagem] = useState("");
    const [erro, setErro] = useState("");


    const cadastrarAdmin = async () => {

        if(!nome || !email || !senha || !restauranteId){
            setErro("Por favor, preencha todos os campos.");
            return;
        }

        try{
            const response = await fetch('http://localhost:4501/api/auth/criar-primeiro-admin',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    nome: nome,
                    email: email,
                    senha: senha,
                    restaurante: restauranteId
                }),
            });

            const data = await response.json();

            if (response.ok) {
                setNome(" ");
                setEmail(" ");
                setSenha(" ");
                setRestauranteId(" ");
                setMensagem("cadastrado com sucesso!");
            } else{
                setErro("Não foi possível cadastrar .");
            }
        } catch (error) {
            setErro("Falha ao buscar. Verifique sua conexão.")
        }    

        
    }



    return(
        <View>
            <View style={styles.header}>
                <Image source={require('../assets/images/logoPequena.png')} style={styles.logoHeader}/>

                <Pressable style={styles.btnVoltar} onPress={() => router.navigate('/login')}>
                    <Text style={styles.btnVoltarText}>
                       VOLTAR
                    </Text>
                </Pressable>
            </View>

            <View style={styles.tela}>

                <Text style={styles.titulo}>Cadastre-se</Text>
                <LoginAlt />
                
                <View style={styles.form}>
                    <TextInput 
                        type="text" 
                        placeholder="Nome" 
                        onChangeText={setNome}
                        style={styles.inputs}
                    />

                    <TextInput 
                        type="text" 
                        placeholder="Email" 
                        onChangeText={setEmail}
                        style={styles.inputs}
                    />

                    <TextInput 
                        type="text" 
                        placeholder="Senha" 
                        onChangeText={setSenha}
                        secureTextEntry={true}
                        style={styles.inputs}
                    />

                    <TextInput 
                        type="text" 
                        placeholder="Restaurante" 
                        onChangeText={setRestauranteId}
                        secureTextEntry={true}
                        style={styles.inputs}
                    />
                </View>

                <View style={styles.resultado}>
                    <Text>{mensagem}</Text>
                </View>
                

                <BotaoLogin 
                    title="Cadastrar"
                    onPress={cadastrarAdmin}
                />

                <View style={styles.comidas}>
                    <Image source={require('../assets/images/batata.png')} style={styles.batata}/>
                    <Image source={require('../assets/images/hamburguer.png')} style={styles.hamburguer}/>
                </View>

                <View style={styles.localizacao}>
                    <EvilIcons name="location" size={37} color="red" />
                    <Text style={styles.localizacaoText}>Tavares Bastos, Rua Cruzeiro do Sul 131 ;</Text>
                </View>
                

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    tela: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#636363',
    fontFamily: 'Inria Sans, sans-serif',
    fontSize: '13px',
    paddingBottom: '110px',
    },

    header: {
        backgroundColor: '#636363',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        gap: 140,
        width: '100%',
        alignItems: 'center',
        paddingTop: 10 ,
    },

    logoHeader:{
        width: '69px',
        height: '69px'
    },

    btnVoltar: {
    backgroundColor: '#000000ff',
    borderRadius: 5,
    border: 'solid 2px #FFA801',
    height: '24px',
    width: '88px',
  },

  btnVoltarText: {
    color: '#FFA801',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: '15px',
    fontWeight: 'bold',
  },

  titulo:{
    fontSize: '35px',
    fontWeight: 'bold',
  },

  form:{
    marginTop: '50px',
    marginBottom: '15px',
  },

  inputs: {
    width: '300px',
    height: '38px',
    borderRadius: '20px',
    border: 'solid 3px #FFA801',
    backgroundColor: '#636363',
    marginBottom: '10px',
    color: '#FFA801',
    paddingLeft: '10px'
  },

  comidas: {
    display: 'flex',
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '30vh',
    marginTop: '60px'
  },

  batata: {
    width: '97px',
    height: '146px'
  },

  hamburguer: {
    width: '115px',
    height: '104px'
  },

  localizacao:{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    marginTop: 20,
  },

  localizacaoText:{
    color: '#FFA801',
    fontSize: '18px',
  }



})