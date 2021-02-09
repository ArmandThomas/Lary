import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Button, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import RecapProduits from '../components/RecapProduits'

class HomePage extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.welcome}>
          <Text style={{ fontSize: 40}}> Bienvenue </Text>
          <Text style={{ fontSize: 40, textAlign : 'center'}}> {this.props.reducerProfil.UsernameProfil} </Text>
        </View>
        <RecapProduits/>
        <TouchableOpacity
          style={{flex: 2, alignItems: 'flex-end', justifyContent: 'flex-end'}}
          activeOpacity = { .6 }
          onPress={() => this.props.navigation.navigate('Search')}>
          <Image
            source={require('../images/boutonScan.png')}
            style={{ width: 100, height : 100 }} />
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
  },
  welcome: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 30,
  }
})

const mapStatetoProps = (state) => {
  return state
}
export default connect(mapStatetoProps)(HomePage)
