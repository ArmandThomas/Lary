import React, { Component } from 'react'
import { Text, TextInput, Alert, View, StyleSheet, Image, TouchableOpacity, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';
import { UserGet } from '../api/UserGet';


class Connexion extends React.Component {
  state = {
    UsernameProfil : '',
    passwordProfil : '',
    loading : false,
    data : [],
    error : false,
    msgerror : '',
  };
  _loadUser() {
    this.setState ({
      loading: true
    })
    UserGet(this.state.UsernameProfil,this.state.passwordProfil).then(data => {
      console.log(data)
      this.setState({
        data : data.data
      } ,() => {
        try {
          if (this.state.data.length !== 0) {
            const action = { type : "PROFIL_CONNEXION", value : this.state }
            this.props.dispatch(action)
            this.setState ({
              loading : false,
            })
          }
        } catch(e) {
          this.setState({
            error: true,
            msgerror : 'Vos identifiants sont incorrects'
          })
        }


      });
    })
  }
  _ToggleConnexion() {
    if (this.state.UsernameProfil =='' && this.state.passwordProfil =='' ) {
      this.setState({
        error : true,
        msgerror: 'Veuillez remplir les informations ci-dessus pour vous connecter'
      })
    } else {
      this._loadUser()
    }
  }
  // hashPassword (value) {
  //   console.log(value)
  //   this.sha256(value).then (hash => {
  //     console.log(hash)
  //     return hash
  //   })
  // }

  render () {
    if (this.state.error == false) {
      return (
        <View style={styles.container}>
          <Image
            style={{ width: 200, height: 170 }}
            source={require('../images/logoLary2.png')}
          />
          <TextInput
          style={styles.inputext}
          placeholder = "Pseudo"
          placeholderTextColor = 'white'
          onChangeText = {(text) => this.setState({ UsernameProfil : text})}
          value = {this.state.UsernameProfil}
          />
          <TextInput
          style={styles.inputext}
          placeholder = "Mot de passe"
          placeholderTextColor = 'white'
          secureTextEntry={true}
          onChangeText = {(text) => this.setState({ passwordProfil : text})}
          value = {this.state.passwordProfil}
          />
          <TouchableOpacity
          style={styles.button}
          onPress={() => this._ToggleConnexion()}
          >
          <Text style={styles.buttonText}>Connexion</Text>
          </TouchableOpacity>
          <Text style={styles.forgetMdp}>Mot de passe oublié ?</Text>
          <Text style={styles.pasDeCompte}>Vous n'êtes pas encore inscrit ?</Text>
          <Text style={styles.inscription} onPress={() => this.props.navigation.navigate('Inscription')}>Créez un compte !</Text>
        </View>
      )
    } else {
      return (
        <View style={styles.container}>
          <Image
            style={{ width: 200, height: 170 }}
            source={require('../images/logoLary2.png')}
          />
          <TextInput
          style={styles.inputext}
          placeholder = "Pseudo"
          placeholderTextColor = 'white'
          onChangeText = {(text) => this.setState({ UsernameProfil : text})}
          value = {this.state.UsernameProfil}
          />
          <TextInput
          style={styles.inputext}
          placeholder = "Mot de passe"
          placeholderTextColor = 'white'
          secureTextEntry={true}
          onChangeText = {(text) => this.setState({ passwordProfil : text})}
          value = {this.state.passwordProfil}
          />
          <Text style={styles.msgerror}>{this.state.msgerror}</Text>
          <TouchableOpacity
          style={styles.button}
          onPress={() => this._ToggleConnexion()}
          >
          <Text style={styles.buttonText}>Connexion</Text>
          </TouchableOpacity>
          <Text style={styles.forgetMdp}>Mot de passe oublié ?</Text>
          <Text style={styles.pasDeCompte}>Vous n'êtes pas encore inscrit ?</Text>
          <Text style={styles.inscription} onPress={() => this.props.navigation.navigate('Inscription')}>Créez un compte !</Text>
        </View>
      )
    }
  }
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1E1E1E',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#33EFAD',
    width: 240,
    height: 44,
    padding: 10,
    borderRadius: 10,
    marginTop: 50,
    marginBottom: 20,
  },
  buttonText:{
    fontSize: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputext: {
    width: 270,
    height: 44,
    padding: 10,
    color: '#fff',
    textAlign:'center',
    fontWeight:'bold',
    borderBottomWidth: 1,
    borderColor: '#fff',
    marginBottom: 10,
  },
  forgetMdp: {
    color: '#fff',
  },
  pasDeCompte: {
    color: '#fff',
    marginTop: 50,
  },
  inscription: {
    color: '#33EFAD',
  },
  msgerror: {
    color: 'red',
    textAlign: 'center',
  },
})


const mapStatetoProps = (state) => {
  return state
}
export default connect(mapStatetoProps)(Connexion)
