import React from 'react'
import { Text,TextInput, View, StyleSheet, Image, TouchableOpacity, Button } from 'react-native';
import { connect } from 'react-redux';

class Connexion extends React.Component {
  render () {
    console.log(this.props)
    return (
      <View>
        <TextInput/>
        <TextInput/>
      </View>
    )
  }
}

const mapStatetoProps = (state) => {
  return state
}
export default connect(mapStatetoProps)(Connexion)
