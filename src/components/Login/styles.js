import { StyleSheet, Platform } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#00BFFF',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: Platform.OS === "ios"? 0:50,
    },
    textInput: {
      marginBottom: 25,
      backgroundColor: '#FFFAFA',
      width: 350,
      height: 50,
      borderRadius: 15,
      padding: 10,
      borderBottomWidth: 1,
      marginLeft: "auto",
      marginRight: "auto",
    },
    buttonLogin: {
      marginTop: 15,
      height: 50,
      width: 200,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#F92E6A",
      overflow: 'hidden',
      borderRadius: 50, // Valor ajustável para obter um botão mais arredondado
    },
    contentAlert: {
      marginTop: 20,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    },
    registration: {
      marginTop: 20,
      color: "#4d5156",
    },
    warningAlert: {
      paddingLeft: 10,
      color: "#bdbdbd",
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

export default styles