/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import Navbar from '../../components/Navbar';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Explore from '../Explore';
import {NavigationContainer} from '@react-navigation/native';
import Surveys from '../Surveys';
import Feed from '../../components/Feed';

export default function Home() {
  useEffect(() => {
    console.log('home');
  }, []);
  const Tab = createMaterialTopTabNavigator();

  return (
    <View style={{backgroundColor: 'red'}}>
      {/* <Tab.Navigator initialRouteName="Feed">
        <Tab.Screen name="Feed" component={Feed} />
        <Tab.Screen name="Explore" component={Explore} />
        <Tab.Screen name="Surveys" component={Surveys} />
      </Tab.Navigator> */}
      <Navbar />
      <Text>Home</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
