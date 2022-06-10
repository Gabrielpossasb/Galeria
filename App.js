import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';


export default function App() {
  return (
    <View style={{flex:1}}>
      <StatusBar hidden/>
      <WebView source={{ uri: 'http://192.168.0.12/app_galeria' }}/>
    </View>
  );
}
