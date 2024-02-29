import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image } from 'react-native';

export default function App() {
  return (
  
    <View style={styles.container}>
      <Text>Isaac CEO of Boxing</Text>
      <Image source={require('./assets/card.jpg')}
      style={styles.image}
      />
      <Text style={styles.font}>Company Logo of Isaac</Text>
    </View>
  
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },

image:{
 width:600,
 height:400 ,
 resizeMode:'center',
 marginVertical:'10',
 borderRadius: 10 // Add border-radius for a rounded effect

},
font:{
  fontSize:20,
  color:'white',
  marginVertical:10,
}
});

