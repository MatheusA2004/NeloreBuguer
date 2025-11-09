import { Text, View, StyleSheet, Image } from "react-native";
import { Button } from "@react-navigation/elements";

export default function telaLogin({ navigation }) {
    return (
        <View style={styles.telaLogin}>
          <View style={styles.logos}>
            <Image source={require('../assets/images/fotoCapa.png')} style={styles.logo}/> 
          </View>
          
    
          <View style={styles.EsqueceuSenha}>
            <text>Esqueceu a senha ?</text>
          </View>
          <input type="text" placeholder="Email" style={styles.inputs}/>
          <input type="text" placeholder="senha" style={styles.inputs}/>
          <View style={styles.botoes}>
            <Text style={styles.btnCadastrar}>Cadastrar</Text>
            <Button title="Login" style={styles.btnLogar}>
              <Text style={styles.btnLogarText}>Logar</Text>
            </Button>
          </View>
    
          <View style={styles.logins}>
            <Image source={require('../assets/images/google.jpg')} style={styles.loginImages}/>
            <Text style={styles.nomeLogins}>Google</Text>
            <Text style={styles.divisor}>|</Text>
            <Image source={require('../assets/images/user.jpg')} style={styles.loginImages}/>
            <Text style={styles.nomeLogins}>Convidado</Text>
          </View>
    
          <View style={styles.comidas}>
            <Image source={require('../assets/images/batata.png')} style={styles.batata}/>
            <Image source={require('../assets/images/hamburguer.png')} style={styles.hamburguer}/>
          </View>
        </View>    
    );
        
}


const styles = StyleSheet.create({

  telaLogin: {
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

  btnLogar: {
    backgroundColor: '#FFA801',
    borderRadius: '15px',
    border: 'solid 2px #111111',
  },

  btnLogarText: {
    color: '#000000ff',
    fontWeight: 'bold',
  },


  inputs: {
    width: '30vh',
    height: '24px',
    borderRadius: '20px',
    border: 'solid 3px #FFA801',
    backgroundColor: '#636363',
    marginBottom: '10px',
    color: '#FFA801',
    paddingLeft: '10px'
  },

  loginImages: {
    width: '50px',
    height: '50px',
    borderRadius: '30px',
    border: 'solid 3px #FFA801',
    marginTop: '15px'
  },


  logins: {
    display: 'flex',
    flexDirection: "row",
    alignItems: 'center',
    width:'34vh',
    justifyContent: 'space-around',
    marginTop: '40px'
  },

  nomeLogins: {
    color: '#FFA801',
    fontWeight: 'bold',
    marginTop: '15px'
  },

  divisor: {
    color: '#FFA801',
    fontWeight: 'bold',
    marginTop: '12px'
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
  }

})