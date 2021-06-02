import React, { useState, useEffect} from "react";
import { Text, StyleSheet, TouchableOpacity, View, Button, Image, ActivityIndicator } from"react-native";



const Home = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  function fetchRandomData() {
    setLoading(true);
    fetch('https://randomuser.me/api').then((response) => response.json()).then((json) => {
       setData(json.results[0]);
        console.log(json.results[0]);
      })
    .catch((error) => console.log(error))
    .finally(() => setLoading(false));
  }

  useEffect(() => {
    fetchRandomData();
  }, []);

  return(
    <View style={styles.container}>
        { isLoading ? <ActivityIndicator size="large" color= "black"/> : (
          <TouchableOpacity onPress={() => navigation.navigate('Profile', data)}>
            <Image style={styles.image} source={{uri: data.picture.large}} />
          </TouchableOpacity>  
        )}
        
        { isLoading ? true : (
          <Text style={styles.names}>
            {data.name.last} {data.name.first} </Text>
        )}

        { isLoading ? true: (
          <Button title ="Random User" color= "black"  onPress={() => {fetchRandomData();
          }} />
        )}
    </View>
  );
}
export default Home;

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'gray',
  },
  image:{
    width: 200,
    height: 250,
    marginBottom: 89,
    borderRadius: 15,
   
  },
  names:{
    marginTop:-90,
    padding: 10,
    color: 'black',
    textAlign: 'center',
    fontSize: 30,
    fontFamily: 'Browallia New',
    fontWeight: 'bold',
    
  }
}
);
