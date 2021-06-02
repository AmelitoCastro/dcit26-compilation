import React from 'react';
import {View, Text} from 'react-native';

export default function App(){
  return(

    <View style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
      
    }}>
    <Text style={{
      color: 'red',
      fontFamily: 'times new roman'
    }}><b>Hello World!</b>
    </Text>
    </View>
    
  );
}