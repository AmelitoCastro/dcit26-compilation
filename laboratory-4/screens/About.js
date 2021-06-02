import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const About = ({ navigation }) => {
  return (
    <View style={styles.container}>
    <Image style={styles.image} source={require('../assets/iphone-11-colors.jpg')} />
      <Text style={styles.text}>
      {'\n'}      The iPhone 11 is available in six colors: Purple, Yellow, Green, Black, White, and Product (Red). A notch is at the front for the TrueDepth camera system and speaker, similar to its predecessor, the iPhone XR. A bump in the back is for the cameras and the flash that is the same size as the iPhone 11 Pro, although the iPhone 11 only has two cameras compared to the Pro's three cameras. Also, the iPhone 11 has a matte glass rear camera housing and glossy glass back, while the iPhone 11 Pro has a glossy glass rear camera housing and matte glass back. The Apple logo is now centered on the back of the device with no text, a change from previous models.
      </Text>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  text: {
    fontFamily: 'Browallia New',
    color: 'black',
    textAlign: 'justify',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: '5%',
    fontSize: 20
  },
  image: {
     height: 200,
    width: 300,
    opacity: 2,
    alignContent: 'center',
    padding: 10,
    marginVertical: 10,
    borderRadius: 20,
  }
});
