import React, { useRef } from 'react';
import { View, StyleSheet, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import { Title, Button, TextInput, Text, useTheme } from 'react-native-paper';
import { Formik } from 'formik';

const LoginScreen = (props) => {
  const screenWidth = Math.round(Dimensions.get('window').width);
  const scrollRef = useRef();
  const theme = useTheme();

  return (
    <View style={styles.container}>
      {/** 
        form support with Formik
        and scrollview horizontal with paging enable
      */}
      <Formik
        initialValues={{ email: '' }}
        onSubmit={values => console.log(values)}
      >
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <ScrollView pagingEnabled horizontal scrollEnabled={false} ref={scrollRef} showsHorizontalScrollIndicator={false}>
          {/** first page */}
          <View style={{ width: screenWidth, paddingHorizontal: 20 }}>
            {/** text input email address */}
            <TextInput
              placeholder="Email address"
              style={[styles.textInput, { backgroundColor: theme.colors.background}]}
            />
            <Button mode="contained" onPress={() => scrollRef.current.scrollTo({ x: screenWidth })}>Continue</Button>
          </View>
          {/** secound page */}
          <View style={{ width: screenWidth, paddingHorizontal: 20  }}>
            {/** text input password */}
            <TextInput
              placeholder="Password"
              secureTextEntry={true}
              style={[styles.textInput, { backgroundColor: theme.colors.background}]}
            />
            <Button mode="contained" onPress={() => props.navigation.replace('TabTop')}>Continue</Button>
            <TouchableOpacity style={styles.buttonBack} onPress={() => scrollRef.current.scrollTo({ x: 0 })}>
              <Text>Back</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      )}
      </Formik>
    </View>
  )
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInput: {
    marginBottom: 20,
    marginTop: 10
  },
  buttonBack: {
    marginTop: 15,
    alignSelf: 'center'
  }
})