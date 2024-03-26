/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Welcome from './pages/welcome';
import Signup from './pages/signup';
import Login from './pages/login';
import {Provider} from 'react-redux';
import store from './redux/store';
import Home from './pages/home';
import Forgot from './pages/forgot';
import Explore from './pages/Explore';
import Notifications from './pages/Notifications';
import Surveys from './pages/Surveys';

const Stack = createNativeStackNavigator();
function App(): React.JSX.Element {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
