import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const handleImage = require('./src/assets/images/header.jpg');

const App = () => {
  return <SafeAreaView></SafeAreaView>;
};

export default App;

const Header = () => {
  <View style={styles.header}>
    <imageContainer image={} />
    <Text>Header</Text>
  </View>;
};

const ImageContainer = ({image}) => {
  <View style={styles.imageContainer}>
    <Image source={image} />
  </View>;
};

const styles = StyleSheet.create({
  container: {flex: 1},
  header: {borderWidth: 1, padding: 15},
  imageContainer: {height: 50, width: 50, borderRadius: 25},
});
