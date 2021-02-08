import React from 'react'
import { Text,TextInput, View, StyleSheet, Image, TouchableOpacity, Button } from 'react-native';
import { connect } from 'react-redux';
import { UserGet } from '../api/UserGet'

class Connexion extends React.Component {
  state = {
    UsernameProfil : 'hecttor',
    passwordProfil : '123',
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
            msgerror : 'Vos identifiants ne semble pas correct'
          })
        },


      });
    })
  }
  _ToggleConnexion() {
    if (this.state.UsernameProfil =='' && this.state.passwordProfil =='' ) {
      this.setState({
        error : true,
        msgerror: 'Vous devez remplir les informations ci-dessus'
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
        <View>
          <TextInput
          style = {{marginTop: 100}}
          placeholder = "Username"
          onChangeText = {(text) => this.setState({ UsernameProfil : text})}
          value = {this.state.UsernameProfil}
          />
          <TextInput
          secureTextEntry={true}
          style = {{marginTop: 50}}
          placeholder = "Password"
          onChangeText = {(text) => this.setState({ passwordProfil : text})}
          value = {this.state.passwordProfil}
          />
          <Button style = {{marginTop: 50}} title="Se connecter" onPress={() => this._ToggleConnexion()}/>
          <Button style = {{marginTop: 50}} title="Inscription" onPress={() => this.props.navigation.navigate('Inscription')}/>
        </View>
      )
    } else {
      return(
        <View>
          <TextInput
          style = {{marginTop: 100}}
          placeholder = "Username"
          onChangeText = {(text) => this.setState({ UsernameProfil : text})}
          value = {this.state.UsernameProfil}
          />
          <TextInput
          secureTextEntry={true}
          style = {{marginTop: 50}}
          placeholder = "Password"
          onChangeText = {(text) => this.setState({ passwordProfil : text})}
          value = {this.state.passwordProfil}
          />
          <Text>{this.state.msgerror}</Text>
          <Button style = {{marginTop: 50}} title="Se connecter" onPress={() => this._ToggleConnexion()}/>
          <Button style = {{marginTop: 150}} title="Inscription" onPress={() => this.props.navigation.navigate('Inscription')}/>
        </View>
      )
    }
  }
}

const mapStatetoProps = (state) => {
  return state
}
export default connect(mapStatetoProps)(Connexion)
