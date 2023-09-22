import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Activity = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Activity</Text>
      <Button
      title='Click here'
      onPress={()=>alert('Button clicked')}>

      </Button>
    </View>
  );
};

export default Activity;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:#8fcbbc,
    }
});
