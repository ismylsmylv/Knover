/* eslint-disable prettier/prettier */
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

export default function Navbar() {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Navbar</Text>
      <TouchableOpacity
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
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});
