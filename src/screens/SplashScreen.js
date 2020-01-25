import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Title } from 'react-native-paper';

const SplashScreen = (props) => {

  useEffect(() => {
    setTimeout(() => {
      props.navigation.replace('Register');
    }, 1000)
  }, []);

  return (
    <View style={styles.container}>
      <Title>Splash Screen</Title>
    </View>
  )
}

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})