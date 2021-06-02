import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { Entypo } from '@expo/vector-icons';

import HomeStack from './HomeStack';
import AboutStack from './AboutStack';

const Drawer = createDrawerNavigator();
const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerStyle={{backgroundColor: 'white'}}
        drawerContentOptions={{activeTintColor: 'black',
          labelStyle: {
            fontFamily: 'Browallia New',
            fontWeight: 'bold',
            fontSize: 20,
          },
          itemStyle: { marginVertical: 5 },
        }}>
        <Drawer.Screen name="Home" component={HomeStack}
          options={{
            title: 'Home',
            drawerIcon: ({ focused, size }) => (
              <Entypo name="home" size={20} color="black" />
            ),
          }}
        />
        <Drawer.Screen name="About" component={AboutStack}
          options={{
            title: 'About',
            drawerIcon: ({ focused, size }) => (
              <Entypo name="info" size={20} color="black" />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
