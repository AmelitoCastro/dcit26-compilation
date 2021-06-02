import React from "react";
import {createStackNavigator} from '@react-navigation/stack';

import { Entypo } from '@expo/vector-icons';
import { Zocial } from '@expo/vector-icons'; 

import Home from'../screens/Home';
import Profile from'../screens/Profile';

const Stack = createStackNavigator();
const HomeStack = ({navigation}) => {

return (
      <Stack.Navigator>
        <Stack.Screen name="Home"component={Home} 
        options={{ headerLeft: () => (
            <Entypo onPress={() => navigation.toggleDrawer()}
            name="menu" 
            size={40} 
            color='white'
            />
          ),
          headerRight: () => (
            <Zocial onPress={() => navigation.navigate('Profile')}
            name="persona" 
            size={25} 
            color='white'
            />
          ),
          headerStyle: {
            backgroundColor: 'black',
            
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontFamily: 'Browallia New',
            fontSize: 30,
            fontWeight: 'bold',
          },
        }}
         
        />
        <Stack.Screen 
        name="Profile" 
        component={Profile} 
        options={{
           headerLeft: () => (
            <Entypo
            onPress={() => navigation.goBack()}
            name="home" 
            size={35} 
            color='black'
            />
          ),
          title: 'Profile',
          headerStyle: {
            backgroundColor: 'white',
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontFamily: 'Browallia New',
            fontSize: 30,
            fontWeight: 'bold',
          },
        }}
        />
      </Stack.Navigator>
  );
}

export default HomeStack;