/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Explore from '../Explore';
import Notifications from '../Notifications';
import Surveys from '../Surveys';
import Forgot from '../forgot';
import Home from '../home';
import Login from '../login';
import Signup from '../signup';
import Welcome from '../welcome';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export default function LoginSession() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Forgot" component={Forgot} />
        <Stack.Screen name="Explore" component={Explore} />
        <Stack.Screen name="Notifications" component={Notifications} />
        <Stack.Screen name="Surveys" component={Surveys} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
