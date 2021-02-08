import React from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView, Button } from 'react-native';
import { connect } from 'react-redux';
import RecapProduits from '../components/RecapProduits'

class HomePage extends React.Component {
    render () {
      return (
      <ScrollView>
        <Text style={{ fontSize: 40, justifyContent:'center'}}> Bienvenue </Text>
        <Text style={{ fontSize: 40}}> {this.props.reducerProfil.UsernameProfil} </Text>
        <View>
          <RecapProduits/>
          <TouchableOpacity activeOpacity = { .6 } onPress={() => this.props.navigation.navigate('Search')}>
            <Image source={require('../images/boutonScan.png')} style={{ width: 100, height : 100 }} />
          </TouchableOpacity>
        </View>
      </ScrollView>
        // <RecapProduits/>
        // <View>
        //   <Text style={{ fontSize: 40}}> Bienvenue </Text>
        //   <Text style={{ fontSize: 40, textAlign : 'center'}}> {this.props.UsernameProfil} </Text>
        // </View>
        // <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'flex-end', margin : 10 }}>
        //   <TouchableOpacity activeOpacity = { .6 } onPress={() => navigation.navigate('Search')}>
        //     <Image source={require('../images/boutonScan.png')} style={{ width: 100, height : 100 }} />
        //   </TouchableOpacity>
        // </View>
        // </View>
        // </View>
      )
    }
  }
const mapStatetoProps = (state) => {
  return state
}
export default connect(mapStatetoProps)(HomePage)
