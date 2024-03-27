/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import Navbar from '../../components/Navbar';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Explore from '../Explore';
import {NavigationContainer} from '@react-navigation/native';
import Surveys from '../Surveys';

export default function Home() {
  useEffect(() => {
    console.log('home');
  }, []);
  const Tab = createMaterialTopTabNavigator();

  return (
    <View>
      {/* <NavigationContainer independent={true}> 
      <Tab.Navigator initialRouteName="Home">
        {/* <Tab.Screen name="Home" component={Home} /> 
        <Tab.Screen name="Explore" component={Explore} />
        <Tab.Screen name="Surveys" component={Surveys} />
      </Tab.Navigator>
      </NavigationContainer> */}
      {/* <Navbar navigation={navigation} /> */}
      <Text>Home</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
