import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from '../components/HomePage';
import Connexion from '../components/Connexion'
import Search from '../components/search';
import RecapProduits from '../components/RecapProduits';


const HomeStack = createStackNavigator();

function NavigationBarCode() {
  return (
      <HomeStack.Navigator>
        <HomeStack.Screen
         name="HomePage"
         component={HomePage}
         options = {{ title : 'Lary'}}
         />
         <HomeStack.Screen
         name="Connexion"
         component = {Connexion}
         />
        <HomeStack.Screen
        name="Search"
        component={Search}
        options={{ title : 'Rechercher un produit'}}
        />
      </HomeStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function NavigationBottom() {
  return(
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='Connexion' component={Connexion}/>
        <Tab.Screen name='HomePage' component={NavigationBarCode}/>
        <Tab.Screen name='Recap de vos produits' component={RecapProduits}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default NavigationBottom;
