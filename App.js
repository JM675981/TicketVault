import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Pressable } from 'react-native';
import React, { useState } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import NativeUIManager from 'react-native/Libraries/ReactNative/NativeUIManager';

SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 2000);

export default function App() {
  const [num, setNum] = useState(0);
  const [cost, setCost] = useState("");

  let calcCost = () => {
    if (num == "") {
      return "";
    } else {
      return "Ticket Cost: $" + (num * 99.99).toFixed(2);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ticket Vault</Text>
      <TextInput placeholder="Number of Tickets" onChangeText={newNum => setNum(newNum)} defaultValue={num} style={styles.input} />
      <Pressable style={styles.button} onPress={() => { setCost(calcCost(num)); }}>
        <Text style={styles.text}>Find The Cost</Text>
      </Pressable>
      <Text style={styles.result}>{cost}</Text>
      <Image source={require('./assets/concert.png')} style={styles.image} />
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 449,
    height: 218,
  },
  input: {
    borderWidth: 1,
    textAlign: 'center',
    fontSize: 40,
    height: 65,
    width: 350,
    marginTop: 30,
    marginBottom: 30,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 55,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#f98b88',
    height: 45,
    width: 205,
  },
  result: {
    fontWeight: 'bold',
    fontSize: 30,
    paddingTop: 30,
    paddingBottom: 30,
  }
});
