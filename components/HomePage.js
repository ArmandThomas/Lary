import React from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity, Button } from 'react-native';

function HomePage({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'flex-end', margin : 10 }}>
      <TouchableOpacity activeOpacity = { .6 } onPress={() => navigation.navigate('Search')}>
        <Image source={require('../images/pictoScan.png')} style={{ width: 60, height : 60 }} />
      </TouchableOpacity>
    </View>
  );
}
export default HomePage;
