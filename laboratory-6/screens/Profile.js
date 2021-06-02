import React from "react";
import { ScrollView, Text, StyleSheet, Image, View} from "react-native";

import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const Profile = ({route}) => {

  const data = route.params;

  return(
    <View style={styles.container}>
     <View style={styles.imgContainer}> 
      <Image style={styles.image} source={{uri: data.picture.large}} />
      <Text style={{fontSize: 20, fontWeight: 'bold', fontFamily: 'Browallia New' }}>{data.name.title}. { data.name.first } {data.name.last}</Text>
     </View>
      
        <ScrollView style={{marginTop: 24, marginBottom:24}}>
        <Entypo name="user" size={24} color="black" > About
        </Entypo>
        <View style={styles.line}></View>
        <Text style={styles.userInfo}>
          Age: {data.dob.age}
          {'\n'}Birthday: {data.dob.date}
          {'\n'}Gender: {data.gender}
          {'\n'}Address: {data.location.street.number} {data.location.city}, {data.location.state}, {data.location.country}
        </Text>
        <View style={{marginTop: 24, marginBottom:24 }}></View>

        <FontAwesome name="envelope" size={24} color="black"> Contact
        </FontAwesome>
        <View style={styles.line}></View>
        <Text style={styles.userInfo}>
          Email: { data.email }
          {'\n'}Phone: { data.phone }
        </Text>
        <View style={{marginTop: 24, marginBottom:24 }}></View>

        <AntDesign name="plussquare" size={24} color="black" > Other
        </AntDesign>
        <View style={styles.line}></View>
        <Text style={styles.userInfo}>Date Registered: { data.registered.date }</Text>
        </ScrollView>
    </View>
  );
}

export default Profile;

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'gray'
  },

  imgContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: 45,
  },

  line: {
     height: 1, 
     width: '100%', 
     backgroundColor: 'gray', 
      marginBottom: 5,
  },

  userInfo: {
    fontSize: 17,
  },

  image:{
    width: 100,
    height: 100,
    borderRadius: 15,
    padding:10,

  },
}
);
