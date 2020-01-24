import * as React from 'react';
import { StatusBar } from 'react-native';
import { Button, IconButton, configureFonts, DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { NavigationNativeContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import 'react-native-gesture-handler';

import SplashScreen from './src/screens/SplashScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import LoginScreen from './src/screens/LoginScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import MessageScreen from './src/screens/MessageScreen';
import MainScreen from './src/screens/MainScreen';

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

const fontConfig = {
  default: {
    regular: {
      fontFamily: 'Rubik-Regular',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'Rubik-Medium',
      fontWeight: 'normal',
    },
    light: {
      fontFamily: 'Rubik-Light',
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: 'Rubik-Light',
      fontWeight: 'normal',
    },
  },
};

const theme = {
  ...DefaultTheme,
  fonts: configureFonts(fontConfig),
};

const TabTop = () => (
  <Tab.Navigator initialRouteName='Main'>
    <Tab.Screen name="Profile" component={ProfileScreen} />
    <Tab.Screen name="Main" component={MainScreen} />
    <Tab.Screen name="Message" component={MessageScreen} />
  </Tab.Navigator>
)

export default function App() {
  return (
    <NavigationNativeContainer>
      <PaperProvider theme={theme}>
        <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
        <Stack.Navigator
          screenOptions={{
            headerBackTitleVisible: false,
            headerTitleAlign: 'center',
            headerStyle: { 
              elevation: 0,
              borderBottomColor: theme.colors.placeholder,
              borderBottomWidth: 0.5
            },
            headerRightContainerStyle: { paddingRight: 15 },
            headerTitleStyle: { fontFamily: 'Rubik-Regular' },
            headerLeft: ({ onPress }) => {
              if (onPress) {
                return <IconButton
                  icon="chevron-left"
                  size={32}
                  color={theme.colors.primary}
                  onPress={onPress}
                />
              }
              return null;
            }
          }}
        >
          <Stack.Screen
            name="Splash"
            component={SplashScreen} 
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Register"
            component={RegisterScreen} 
            options={({ navigation }) => ({
              title: 'Register',
              headerRight: () => (
                <Button mode="text" uppercase={false}
                  labelStyle={{ letterSpacing: 0, fontWeight: 'normal' }}
                  onPress={() => navigation.push('Login')}
                >
                  Login here
                </Button>
              )
            })}
          />
          <Stack.Screen
            name="Login"
            component={LoginScreen} 
            options={{ title: 'Login' }}
          />
          <Stack.Screen
            name="TabTop"
            component={TabTop} 
            options={{
              headerShown: false
            }}
          />
        </Stack.Navigator>
      </PaperProvider>
    </NavigationNativeContainer>
  );
}