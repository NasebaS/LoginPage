import React,{useState} from 'react';
import {
  Alert,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
   View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Icon } from 'react-native-elements'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'


const LoginScreen=()=> {
 const [username,setUserName]=useState('')
 const [password,setPassword]=useState('')
 const [rememberMe,setRememberMe]=useState(false)

 const handleLogin = () => {
  if(!username&&!password){
    
    Alert.alert('Successfully logged in')
  }
  else{
    Alert.alert('Fill all details')
  }
   
};


  return (
    <LinearGradient
    colors={['#5A36CE', '#E70E79']}
    start={{ x: 0, y: 0.5 }}
    end={{ x: 1, y: 0.5 }}
    style={styles.container}
  >
        <View style={styles.container}>
          <Text style={styles.title}>MobileApp</Text>
          <View>
          <FontAwesomeIcon icon="square-check" />
          <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={text => setUserName(text)}
      />
          </View>
          <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={text => setPassword(text)}
      />

<View style={styles.checkboxContainer}>
        <TouchableOpacity
          style={[styles.checkbox, rememberMe && styles.checkboxChecked]}
          onPress={() => setRememberMe(!rememberMe)}
        />
        <Text>Remember me</Text>
      </View>
      <TouchableOpacity  >
        <Text style={styles.link}>Forgot password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity >
        <Text style={styles.text}>Not a member? </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleLogin}>
        <Text style={[styles.text, styles.link]}>Create Account</Text>
      </TouchableOpacity>
      </View>
     </LinearGradient>
     
  );
}

const styles = StyleSheet.create({
  container: {
 flex:1,
 justifyContent:'center',
 alignContent:'center',
 padding: 16,
  },
  title:{
color:'white',
fontSize:30,
fontWeight:'bold',
textAlign:'center',
marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    marginBottom: 16,
    borderWidth: 1,
    borderRadius: 14,
    padding: 8,
    backgroundColor: 'transparent',
     color: 'white',
     borderColor:'white',
     
  },
  checkboxContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  checkbox:{
    width: 20,
    height: 20,
    borderRadius: 4,
    borderWidth: 1,
    marginRight: 8,
    color:'white'
  },
  checkboxChecked:{
    backgroundColor: 'blue',
    borderColor: 'blue',
  },
  checkboxText: {
    color: 'white',
  },
  link:{
    textDecorationLine: 'underline',
    color:'white'
  },
  button:{
    width: '100%',
    backgroundColor: 'white', 
    borderRadius: 14,
    padding: 12,
    alignItems: 'center',
    marginTop: 16,
  },
  buttonText:{
    color: 'black', 
    fontWeight: 'bold',
  },
  text:{
    color: 'black',
  },

});

export default LoginScreen;
