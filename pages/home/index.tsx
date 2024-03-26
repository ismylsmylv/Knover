/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import Navbar from '../../components/Navbar';

export default function Home() {
  useEffect(() => {
    console.log('home');
  }, []);

  return (
    <View>
      <Navbar />
      <Text>Home</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
