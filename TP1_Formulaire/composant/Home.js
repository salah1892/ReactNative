import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from "react"

export default function Home() {
    return (
        <View style={styles.container}>
            <Text style={styles.Text}>Welcome</Text>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#D7BDE2',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    Text:{
        color:"black",
        fontWeight: 'bold',
        fontSize: 50,
    },
});
