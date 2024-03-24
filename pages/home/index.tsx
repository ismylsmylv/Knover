/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';

export default function Home() {
  useEffect(() => {
    console.log('home');
  }, []);

  return (
    <View>
      <Text>Home</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
