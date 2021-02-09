import * as React from 'react';
import { Text, Button, View, StyleSheet, TouchableOpacity } from 'react-native';
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
        <View style={styles.container}>
            <Text>Votre Profil</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this._ToggleDeconnexionConnexion()}
              >
              <Text style={styles.buttonText}>Déconnexion</Text>
            </TouchableOpacity>
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

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
})

const mapStatetoProps = (state) => {
  return state
}
export default connect(mapStatetoProps)(Profil)
