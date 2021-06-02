import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Entypo } from '@expo/vector-icons';

import { Button } from 'react-native';
import About from '../screens/About';

const Stack = createStackNavigator();
const AboutStack = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="About" component={About}
        options={{
        headerRight: () => (
          <Entypo onPress={() => navigation.goBack()}
              name="back"
              size={30}
              color="black"
       />
          ),
          title: 'About',
          headerStyle: {
            backgroundColor: 'white',
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontFamily: 'Browallia New',
            fontSize: 23,
            fontWeight: 'bold'
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default AboutStack;
