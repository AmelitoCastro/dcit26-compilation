import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Entypo from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from "../screens/Home";
import Profile from '../screens/Profile';

const Stack = createStackNavigator();

const HomeStack = ({navigation}) => {
  return(
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} 
        options={{ headerLeft: () => (
            <Entypo onPress={() => navigation.toggleDrawer()}
            name="menu" 
            size={40} 
            color='white'
            />
          ),
            headerStyle: {
             backgroundColor: 'black',
           },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontFamily: 'Browallia New',
            fontSize: 25,
            fontWeight: 'bold',
          },
          }} />
      <Stack.Screen name="Profile" component={ Profile }/>
    </Stack.Navigator>
  );
};

export default HomeStack;