import { StatusBar } from 'expo-status-bar';
import { TextInput, View, Button, Text,  TouchableOpacity, Image, TouchableNativeFeedback, KeyboardAvoidingView, Platform} from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import userIcon from '../../../assets/icon-user.png';
import React, { useState, useEffect } from "react";
import { signInWithEmailAndPassword } from 'firebase/auth';
import {auth} from "../../config/firebase"
import styles from "./styles"


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorLogin, setErrorLogin] = useState("");
  const navigation = useNavigation();

  const loginFirebase = () => {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      //Signed in
      let user = userCredential.user;
      navigation.navigate('Home');
    })
    .catch((error) =>{
      
      let errorCode = error.code;
      let errorMessage = error.message;
    });
  }

  const navigateToRegister = () => {
      navigation.navigate('Register');
  };

  return (
    <KeyboardAvoidingView style={styles.container}> 
      <Image style={styles.image} source={userIcon}/>
      <View>
          <TextInput style={styles.textInput} 
          placeholder='Email' 
          type="text" 
          onChangeText={(text) => setEmail(text)}
          value={email}
          />
      </View>
      <View>
          <TextInput style={styles.textInput} 
          placeholder='Password'
          type= "text"
          onChangeText={(text) => setPassword(text)} 
          value={password}
          />
      </View>
      {errorLogin === true
      ?
      <View styles={styles.contentAlert}>
        <MaterialCommunityIcons
        name="alert-circle"
        size={24}
        color="#bdbdbd"
        />
        <Text style={styles.warningAlert}>invalid e-mail or password</Text>
      </View>
      :
      <View/>
      }
        { email === "" || password === ""
        ?
          <TouchableOpacity
            disabled={true}
            style={styles.buttonLogin}
          >
            <Text style={styles.textButtonLogin}>Login</Text>
          </TouchableOpacity>
        :
          <TouchableOpacity
            style={styles.buttonLogin}
            onPress={loginFirebase}
          >
            <Text style={styles.textButtonLogin}>Login</Text>
          </TouchableOpacity>
        }
      <Text style={styles.text}>
          Não tem uma conta?{' '}
          <TouchableNativeFeedback onPress={navigateToRegister}>
              <Text style={{ color: 'blue', textDecorationLine: 'underline' }}>Registre-se</Text>
          </TouchableNativeFeedback>
          {/* <TouchableOpacity onPress={() => console.log('Redirecionar para a tela de registro')}>
          </TouchableOpacity> */}
      </Text>
      <StatusBar style="auto" />
    </KeyboardAvoidingView>
  );
};

export default Login;