import React from 'react';
import { StyleSheet, View, TextInput, Text, Image, TouchableOpacity, Button } from 'react-native';
import { connect } from 'react-redux';
import { MailGet } from '../api/MailGet';
import { UserPost } from '../api/UserPost';
import { UserGet } from '../api/UserGet';

class Inscription extends React.Component {
  state = {
    UsernameProfil : '',
    passwordProfil : '',
    mail : '',
    data : [],
    loading : false,
    error : false,
    msgerror : '',
  }
  _ToggleInscription(){
    if (this.state.UsernameProfil == '' && this.state.passwordProfil == '' && this.state.mail == '') {
      this.setState ({
        error : true,
        msgerror : 'Vous devez remplir les informations ci-dessus'
      })
    } else {
      console.log('ok')
      this._loadUser()
    }
  }
  _loadUser() {
    this.setState ({
      loading: true
    })
  MailGet(this.state.mail).then(data => {
      if (data.message == 'Corresponde trouvee'){
        this.setState ({
          error : true,
          msgerror : 'Votre adresse mail est déjà associé à un compte veuillez vous connecter'
        })
      } else if (data.message == 'Aucun mail'){
        UserPost(this.state.UsernameProfil,this.state.passwordProfil,this.state.mail).then(data => {
          if (data.success == true){
            UserGet(this.state.UsernameProfil,this.state.passwordProfil).then(data => {
              this.setState({
                data : data.data
              } ,() => {
                const action = { type : "PROFIL_CONNEXION", value : this.state }
                this.props.dispatch(action)
                this.setState ({
                  loading : false,
                })
              });
            })
          } else {
            this.setState ({
              error : true,
              msgerror : 'Une erreur c\'est produite'
            })
          }
        })
      }
    })
  }
  render () {
    if (this.state.error == false) {
      return(
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
          <TextInput
            style = {styles.inputext}
            placeholder = "Adresse mail"
            placeholderTextColor = 'white'
            onChangeText = {(text) => this.setState({ mail : text})}
            value = {this.state.mail}
            />
            <TouchableOpacity
              style={styles.button}
              onPress={() => this._ToggleInscription()}
            >
              <Text style={styles.buttonText}>Inscription</Text>
            </TouchableOpacity>
            <Text style={styles.dejaUnCompte}>Vous avez déjà un compte ?</Text>
            <Text style={styles.connexion} onPress={() => this.props.navigation.navigate('Connexion')}>Connectez-vous !</Text>
        </View>
      )
    } else {
      return(
        <View style={styles.container}>
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
          <TextInput
            style = {styles.inputext}
            placeholder = "Adresse mail"
            placeholderTextColor = 'white'
            onChangeText = {(text) => this.setState({ mail : text})}
            value = {this.state.mail}
            />
            <Text style={styles.msgerror}>{this.state.msgerror}</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this._ToggleInscription()}
            >
              <Text style={styles.buttonText}>Inscription</Text>
            </TouchableOpacity>
            <Text style={styles.dejaUnCompte}>Vous avez déjà un compte ?</Text>
            <Text style={styles.connexion} onPress={() => this.props.navigation.navigate('Connexion')}>Connectez-vous !</Text>
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
  msgerror: {
    color: 'red',
  },
  dejaUnCompte: {
    color: '#fff',
    marginTop: 50,
  },
  connexion: {
    color: '#33EFAD',
  },
})

const mapStatetoProps = (state) => {
  return state
}
export default connect(mapStatetoProps)(Inscription)
