import React from 'react';
import styles from "./styles"
import { TextInput, View, Button, Text,  TouchableOpacity, Image, TouchableNativeFeedback} from 'react-native';

const Home = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Esta eh a home page</Text>
        </View>
    );
};

export default Home;