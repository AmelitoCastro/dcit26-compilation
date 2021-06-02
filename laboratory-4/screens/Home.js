import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const Home = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.text}>iPhone11</Text>
        <Image style={styles.image} source={require('../assets/Iphone-11.png')} />

        <Text style={styles.content}>
        {'\n'}   The iPhone 11 is a smartphone designed, developed, and marketed by Apple Inc. It is the 13th generation, lower-priced iPhone, succeeding the iPhone XR. It was unveiled on September 10, 2019, alongside the higher-end iPhone 11 Pro flagship at the Steve Jobs Theater in Apple Park, Cupertino, by Apple CEO Tim Cook. Preorders began on September 13, 2019, and the phone was officially released on September 20, 2019, one day after the official public release of iOS 13.

      {'\n'}    {'\n'}     The prominent changes compared with the iPhone XR are the Apple A13 Bionic chip, and an ultra-wide dual-camera system.[5] While the iPhone 11 Pro comes with an 18 W Lightning to USB-C fast charger, the iPhone 11 comes with the same 5 W charger found on previous iPhones, though the 18 W charger is compatible with both models.
 
        </Text>
      </View>
    </ScrollView>
  );
};
export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  content: {
    fontFamily: 'Browallia New',
    color: 'black',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: '5%',
    fontSize: 20,
  },
  text: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    fontFamily: 'Browallia New',
  },

});
