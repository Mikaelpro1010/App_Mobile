import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/components/Login/';
import Home from './src/components/Home/';
import Register from './src/components/Register/';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Register" component={Register}/>
        <Stack.Screen name="Home" component={Home}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#00BFFF',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   box: {
//     backgroundColor: '#DCDCDC',
//     alignItems: 'center',
//     justifyContent: 'center',
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.50,
//     shadowRadius: 4.65,
//     elevation: 6,
//     width: 300,
//     height: 200,
//   },
//   textInput: {
//     marginBottom: 25,
//     backgroundColor: '#FFFAFA',
//     width: 350,
//     height: 50,
//     borderRadius: 15,
//   },
//   button: {
//     marginTop: 15,
//     width: 200,
//     overflow: 'hidden',
//     borderRadius: 12, // Valor ajustável para obter um botão mais arredondado
//   },
//   label: {
//     fontSize: 15,
//     fontWeight: 'bold',
//   },
//   text: {
//     marginTop: 5,
//     fontSize: 15,
//   },
//   image: {
//     marginBottom: 30,
//     width: 100,
//     height: 100,
//   }

// });