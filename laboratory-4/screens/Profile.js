import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const About = ({ navigation }) => {
  return (
    <View style={styles.container}>
     <Text style={styles.text}>
     <Image style={styles.image} source={require('../assets/iPhone-11-profile.jpg')} />
      {'\n'}Released 2019, September 20
      {'\n'}194g, 8.3mm thickness
      {'\n'}iOS 13, up to iOS 14.4.2
      {'\n'}64GB/128GB/256GB storage, no card slot


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
    borderRadius: 20
    
   }
});
