import * as React from 'react';
import { Text, Button, View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

class Profil extends React.Component {
  _ToggleDeconnexionConnexion() {
    const deco = {type : "DECONNEXION", value : this.props.mail}
    this.props.dispatch(deco)
    const action = {type : "PROFIL_DECONNEXION", value : this.props.mail}
    this.props.dispatch(action)
  }
  render () {
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Votre Profil</Text>
            <Button style = {{marginTop: 50}} title="Se Déconnecter" onPress={() => this._ToggleDeconnexionConnexion()}/>
        </View>
    )
  }
}
// class Profil {
//   _ToggleDeconnexionConnexion() {
//     console.log('coucou')
//   }
//   render () {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>Votre profil</Text>
//         <Button style = {{marginTop: 50}} title="Se connecter" onPress={() => this._ToggleDeconnexionConnexion()}/>
//       </View>
//     )
//   }
//
// }
const mapStatetoProps = (state) => {
  return state
}
export default connect(mapStatetoProps)(Profil)
