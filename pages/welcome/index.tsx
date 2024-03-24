/* eslint-disable prettier/prettier */
import {View, Text} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

export default function Welcome() {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();
  return (
    <View>
      <Text>Welcome {count}</Text>
    </View>
  );
}
