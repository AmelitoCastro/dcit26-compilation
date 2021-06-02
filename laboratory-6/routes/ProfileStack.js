import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from "../screens/Home";
import Profile from '../screens/Profile';

const Stack = createStackNavigator();


const ProfileStack = () => {
  return (
      <Stack.Navigator
        screenOptions={({ navigation }) => ({
            headerTitleAlign: 'Center',
            headerLeft: () => <Icon name="keyboard-backspace"  size={32} color="black"  
             onPress={() => navigation.goBack()}/>
          })
          }
      >
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
  )
}

export default ProfileStack;