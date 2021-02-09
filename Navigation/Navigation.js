import * as React from 'react';
import { View, Text, Image } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomePage from '../components/HomePage';
import Search from '../components/search';
import ListeDeCourses from '../components/listeDeCourses';
import Recettes from '../components/recettes';
import Profil from '../components/profil';


// function Navigation() {
//   return(
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="HomePage">
//         <Stack.Screen name="HomePage" component={HomePage} options = { { title : "Lary" }}/>
//         <Stack.Screen name="Search" component={Search} options = { { title : 'Scan Code Barre' } }/>
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

const HomeStack = createStackNavigator();

function LogoTitle() {
  return (
    <Image
      style={{ width: 90, height: 80 }}
      source={require('../images/logoLary.png')}
    />
  );
}

function NavigationBarCode() {
  return (
      <HomeStack.Navigator>
        <HomeStack.Screen
         name="HomePage"
         component={HomePage}
         options=
         {{
           headerStyle: {
            backgroundColor: '#33efab',
          },
           headerTitle: props => <LogoTitle {...props} />
         }}
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
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Produits') {
              iconName = focused ? 'ios-pizza' : 'ios-pizza';
            } else if (route.name === 'Courses') {
              iconName = focused ? 'ios-basket' : 'ios-basket';
            } else if (route.name === 'Recettes') {
              iconName = focused ? 'ios-color-fill' : 'ios-color-fill';
            } else if (route.name === 'Profil') {
              iconName = focused ? 'ios-person' : 'ios-person';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#33efab',
          inactiveTintColor: '#888',
          style : {
            height : 60
          },
          labelStyle : {
            marginBottom : 3
          }
        }}
      >
        <Tab.Screen name='Produits' component={NavigationBarCode}/>
        <Tab.Screen name='Courses' component={ListeDeCourses}/>
        <Tab.Screen name='Recettes' component={Recettes}/>
        <Tab.Screen name='Profil' component={Profil}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default NavigationBottom;
