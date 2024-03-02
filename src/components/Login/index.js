import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TextInput, View, Button, Text,  TouchableOpacity, Image, TouchableNativeFeedback} from 'react-native';
import React from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import userIcon from '../../../assets/icon-user.png';;

const Login = () => {
  const navigation = useNavigation();

  const navigateToRegister = () => {
      navigation.navigate('Register');
  };

  return (
    <View style={styles.container}> 
      <Image style={styles.image} source={userIcon}/>
      <View>
          <TextInput style={styles.textInput} placeholder='Email'></TextInput>
          
      </View>
      <View>
          <TextInput style={styles.textInput} placeholder='Password'></TextInput>
      </View>
      <View style={styles.button}>
            <Button
            color= "green"
            title="Login"
            onPress={() => {
                // Função a ser executada quando o botão é pressionado
            }}
            />
      </View>
      <Text style={styles.text}>
          Não tem uma conta?{' '}
          <TouchableNativeFeedback onPress={navigateToRegister}>
              <Text style={{ color: 'blue', textDecorationLine: 'underline' }}>Registre-se</Text>
          </TouchableNativeFeedback>
          {/* <TouchableOpacity onPress={() => console.log('Redirecionar para a tela de registro')}>
          </TouchableOpacity> */}
      </Text>
      <StatusBar style="auto" />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00BFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    backgroundColor: '#DCDCDC',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.50,
    shadowRadius: 4.65,
    elevation: 6,
    width: 300,
    height: 200,
  },
  textInput: {
    marginBottom: 25,
    backgroundColor: '#FFFAFA',
    width: 350,
    height: 50,
    borderRadius: 15,
  },
  button: {
    marginTop: 15,
    width: 200,
    overflow: 'hidden',
    borderRadius: 12, // Valor ajustável para obter um botão mais arredondado
  },
  label: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  text: {
    marginTop: 5,
    fontSize: 15,
  },
  image: {
    marginBottom: 30,
    width: 100,
    height: 100,
  }

});