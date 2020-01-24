import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Title, Button } from 'react-native-paper';

const RegisterScreen = (props) => {
  return (
    <View style={styles.container}>
      <Title>Register Screen</Title>
      <Button onPress={() => props.navigation.replace('TabTop')}>Go to Main Screen</Button>
    </View>
  )
}

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF'
  }
})