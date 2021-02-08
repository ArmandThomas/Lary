import React from 'react';
import { StyleSheet, View, TextInput, Text, Image, Button } from 'react-native';
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
        <View>
          <TextInput
          style = {{marginTop: 40}}
          placeholder = "Entrez votre username"
          onChangeText = {(text) => this.setState({ UsernameProfil : text})}
          value = {this.state.UsernameProfil}
          />
          <TextInput
          secureTextEntry={true}
          style = {{marginTop: 40}}
          placeholder = "Entrez votre password"
          onChangeText = {(text) => this.setState({ passwordProfil : text})}
          value = {this.state.passwordProfil}
          />
          <TextInput
          style = {{marginTop: 40}}
          placeholder = "Entrez votre mail"
          onChangeText = {(text) => this.setState({ mail : text})}
          value = {this.state.mail}
          />
          <Button style = {{marginTop: 50}} title="S'inscrire" onPress={() => this._ToggleInscription()}/>
        </View>
      )
    } else {
      return(
        <View>
          <TextInput
          style = {{marginTop: 40}}
          placeholder = "Entrez votre username"
          onChangeText = {(text) => this.setState({ UsernameProfil : text})}
          value = {this.state.UsernameProfil}
          />
          <TextInput
          secureTextEntry={true}
          style = {{marginTop: 40}}
          placeholder = "Entrez votre password"
          onChangeText = {(text) => this.setState({ passwordProfil : text})}
          value = {this.state.passwordProfil}
          />
          <TextInput
          style = {{marginTop: 40}}
          placeholder = "Entrez votre mail"
          onChangeText = {(text) => this.setState({ mail : text})}
          value = {this.state.mail}
          />
          <Text>{this.state.msgerror}</Text>
          <Button style = {{marginTop: 50}} title="S'inscrire" onPress={() => this._ToggleInscription()}/>
        </View>
      )
    }
  }
}
const mapStatetoProps = (state) => {
  return state
}
export default connect(mapStatetoProps)(Inscription)
