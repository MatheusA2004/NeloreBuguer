import { Text, View, StyleSheet, Image, Pressable, TextInput } from "react-native";
import { BotaoLogin } from "../components/botaoLogin";
import { LoginAlt } from "../components/loginsAlt";
import EvilIcons from '@expo/vector-icons/EvilIcons';
import { router } from "expo-router";

export default function telaLogin() {
    return (
        <View style={styles.tela}>
          <View style={styles.logos}>
            <Image source={require('../assets/images/fotoCapa.png')} style={styles.logo}/> 
          </View>
          
    
          <View style={styles.EsqueceuSenha}>
            <text>Esqueceu a senha ?</text>
          </View>
          <TextInput type="text" placeholder="Email" style={styles.inputs}/>
          <TextInput type="text" placeholder="senha" style={styles.inputs}/>
          <View style={styles.botoes}>
            <Pressable style={styles.btnCadastrar} onPress={() => router.navigate('/cadastro')}>Cadastrar</Pressable>

            <BotaoLogin 
              title="Logar"
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