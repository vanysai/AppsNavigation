import React from 'react';
import { View, StyleSheet, Button} from 'react-native';


export function ScreenB() {
  return (
    <View style={styles.container}>
        <button 
        title='Voltar para A' 
        color="#fff">

        </button>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "blue",
        justifyContent: "center"
    }
})