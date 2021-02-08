import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Connexion from '../components/Connexion';
import Inscription from '../components/Inscription';


const HomeStack = createStackNavigator();

function NavigationConnexion(){
  return (
    <NavigationContainer>
      <HomeStack.Navigator>
        <HomeStack.Screen
        name = "Connexion"
        component = {Connexion}
        />
        <HomeStack.Screen
        name = "Inscription"
        component = {Inscription}
        />
        </HomeStack.Navigator>
    </NavigationContainer>
  )
}
export default NavigationConnexion
