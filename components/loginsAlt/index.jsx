import { StyleSheet, Text, View, Image } from "react-native"

export const LoginAlt = () => {
    return(
        <View style={styles.logins}>
            <Image source={require('../../assets/images/google.jpg')} style={styles.loginImages}/>
            <Text style={styles.nomeLogins}>Google</Text>
            <Text style={styles.divisor}>|</Text>
            <Image source={require('../../assets/images/user.jpg')} style={styles.loginImages}/>
            <Text style={styles.nomeLogins}>Convidado</Text>
        </View>
    )
}

const styles = StyleSheet.create({

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

  loginImages: {
    width: '50px',
    height: '50px',
    borderRadius: '30px',
    border: 'solid 3px #FFA801',
    marginTop: '15px'
  }
})