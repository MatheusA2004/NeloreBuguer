import EvilIcons from '@expo/vector-icons/EvilIcons';
import { router } from "expo-router";
import { useState } from 'react';
import { Alert, Image, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { BotaoLogin } from "../components/botaoLogin";
import { LoginAlt } from "../components/loginsAlt";

export default function telaLogin() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleLogin = async () => {
        // Validação simples
        if (!email || !password) {
            Alert.alert("Erro", "Por favor, preencha email e senha.");
            return;


        }

        try {
            // ATENÇÃO: Troque SEU_IP pelo IP da sua máquina se rodar no celular físico
            // Se for emulador Android, use 10.0.2.2
            const response = await fetch('http://localhost:4501/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'accept' : '*/*'
                },
                body: JSON.stringify({
                    // As chaves aqui devem ser iguais aos atributos do seu LoginAdminDto no Java
                    "login": email,
                    "senha": password // ou 'senha', verifique no seu Java
                }),
            });

            if (!response.ok) {
             // Se for 403 ou 401, lança erro manual para cair no catch
             throw new Error("Usuário ou senha inválidos (ou erro 403)");
        }

            const data = await response.json();

            if (response.ok) {
                // Sucesso! O 'data' contém seu RecoveryJwtTokenDto (o token)
                console.log("Token recebido:", data.token);
                
                // Aqui você deveria salvar o token (ex: AsyncStorage) antes de navegar
                
                Alert.alert("Sucesso", "Login realizado!");
                router.navigate('/home'); 
            } else {
                // Erro vindo do backend (ex: 401 ou 403)
                Alert.alert("Erro no Login", "Email ou senha incorretos.");
            }

        } catch (error) {
            console.error(error);
            Alert.alert("Erro de Conexão", "Não foi possível conectar ao servidor.");
        }
    };

    return (
        <View style={styles.tela}>
          <View style={styles.logos}>
            <Image source={require('../assets/images/fotoCapa.png')} style={styles.logo}/> 
          </View>
          
    
          <View style={styles.EsqueceuSenha}>
            <text>Esqueceu a senha ?</text>
          </View>
          <TextInput type="text" placeholder="Email" style={styles.inputs} onChangeText={setEmail} value={email}/>
          <TextInput type="text" placeholder="senha" style={styles.inputs} onChangeText={setPassword} value={password}/>
          <View style={styles.botoes}>
            <Pressable style={styles.btnCadastrar} onPress={() => router.navigate('/cadastro')} >Cadastrar</Pressable>

            <BotaoLogin 
              title="Logar"
              onPress={handleLogin}
            />

            <BotaoLogin 
              title="ir para pagina home"
              onPress={() => router.navigate('/home')}
            />

          </View>
    
          <LoginAlt />
    
          <View style={styles.comidas}>
            <Image source={require('../assets/images/batata.png')} style={styles.batata}/>
            <Image source={require('../assets/images/hamburguer.png')} style={styles.hamburguer}/>
          </View>

          <View style={styles.localizacao}>
            <EvilIcons name="location" size={37} color="red" />
            <Text style={styles.localizacaoText}>Tavares Bastos, Rua Cruzeiro do Sul 131 ;</Text>
          </View>
        </View>    

        
    );
        
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
  },

  logos: {
    display: 'flex',
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: '20px',
  },

  logo: {
    width: '253px',
    height: '143px',
  },

  EsqueceuSenha: {
    alignSelf: 'flex-end',
    width:'20vh',
    marginBottom: '6px',
    textDecorationLine: 'underline',
    color: '#FFA801',
  },


  botoes: {
    display: 'flex',
    flexDirection: "row",
    justifyContent: 'space-between',
    width:'30vh',
    
  },

  btnCadastrar: {
    color: '#FFA801',
    textDecorationLine: 'underline',
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