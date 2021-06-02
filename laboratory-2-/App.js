// Adelan, Ivan Paul
// Calizo, Jeremy 
// Elaga, Amelito
// Viterbo, Maron
// BSCS 3-4 


import React, {useState} from 'react';
import{View,Text, Button,StyleSheet,TextInput

} from 'react-native';

export default function App() {
 const[enterText, setEnterText] = useState('');
 const [userInput, setUserInput] = useState([]);
 
 const addInputHandler = (enteredText) => {
  setEnterText(enteredText);
 };

 const additemHandler = () => {
  setUserInput(currentInput => [...currentInput, enterText]);
  setEnterText('');
  
  };
  return (
   <View style={styles.mon}>
    <View style={styles.container}>
     <TextInput 
     placeholder="Enter Item" style={styles.holder} 
     onChangeText={addInputHandler}
     value={enterText}
     />
     <Button title="ADD" onPress={additemHandler} />
    </View>
    <View>
        {userInput.map((input) => (
          <View style={styles.listItem}>
          <Text key={input}>{input}</Text>
          </View>
        ))}
      </View>
   </View>
  )
}

const styles = StyleSheet.create({
 mon: {
  padding: 50
 },
 
 container: {
  flexDirection: 'row', 
  justifyContent: 'space-between', 
  alignItems: 'center'
 },

 holder: {
  height: '100%',
  width: '80%',
  borderColor: 'black', 
  borderWidth: 1,
  padding:10
 },
 
 listItem: {
  backgroundColor: 'gray', 
  padding: 10,
  marginTop: 5,
  borderColor: 'black',
  borderWidth: 1
 }
});