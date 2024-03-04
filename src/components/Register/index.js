import { KeyboardAvoidingView, StyleSheet, TextInput, View, Button, Text,  TouchableOpacity, Image, TouchableNativeFeedback} from 'react-native';
import React, { useState, useEffect } from "react";
import {auth} from "../../config/firebase"
import { createUserWithEmailAndPassword } from 'firebase/auth';
import styles from "./styles"

const Register = () => {
    const [email, registerEmail] = useState("");
    const [password, registerPassword] = useState("");
  
    const registerFirebase = () => {
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        let user = userCredential.user;
        // navigation.navigate('Home');
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Erro no registro:", errorCode, errorMessage);
        // ..
      });
    }

    return(
        <KeyboardAvoidingView style={styles.container}>
            <View>
                <TextInput style={styles.textInput} placeholder='Email'
                  type="text" 
                  onChangeText={(text) => registerEmail(text)}
                  value={email}
                 />
            </View>
            <View>
                <TextInput style={styles.textInput} placeholder='Password' 
                type= "text"
                onChangeText={(text) => registerPassword(text)} 
                value={password}
                />
            </View>
            <TouchableOpacity
            style={styles.buttonRegister}
            onPress={registerFirebase}
            >
            <Text style={styles.textButtonLogin}>Register</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    );
}

export default Register;

