/* eslint-disable prettier/prettier */
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Home from '../../pages/home';
import Explore from '../../pages/Explore';
import Surveys from '../../pages/Surveys';
import Feed from '../Feed';
export default function Navbar() {
  const navigation = useNavigation();
  const Tab = createMaterialTopTabNavigator();
  return (
    <View>
      <Text>Navbar</Text>
      {/* <TouchableOpacity
        onPress={() => {
          navigation.navigate('Home');
        }}>
        <Text>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Explore');
        }}>
        <Text>Explore</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Notifications');
        }}>
        <Text>Notifications</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Surveys');
        }}>
        <Text>Surveys</Text>
      </TouchableOpacity> */}
      <Tab.Navigator initialRouteName="Feed">
        <Tab.Screen name="Feed" component={Feed} />
        <Tab.Screen name="Explore" component={Explore} />
        <Tab.Screen name="Surveys" component={Surveys} />
      </Tab.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({});
