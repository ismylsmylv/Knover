/* eslint-disable prettier/prettier */
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import Feed from '../../components/Feed';
import Explore from '../Explore';
import Notifications from '../Notifications';
import Surveys from '../Surveys';
import Icon from 'react-native-vector-icons/AntDesign';

export default function Home() {
  useEffect(() => {
    console.log('home');
  }, []);
  const navigation = useNavigation();
  const Tab = createMaterialTopTabNavigator();
  return (
    <View style={{backgroundColor: '#8d39ed', flex: 1}}>
      <View style={styles.upper}>
        <Text style={styles.logo}>knover</Text>
        <TouchableOpacity
          style={styles.profile}
          onPress={() => {
            navigation.navigate('Profile');
          }}>
          <Text>profile</Text>
        </TouchableOpacity>
      </View>
      <Tab.Navigator
        initialRouteName="Feed"
        screenOptions={{
          tabBarLabel: 'Feed',
          tabBarStyle: {backgroundColor: '#8d39ed'},
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: 'gray',
        }}>
        <Tab.Screen
          name={'Feed'}
          component={Feed}
          options={{
            tabBarLabel: 'Feed',
          }}
        />
        <Tab.Screen
          name={'Explore'}
          options={{
            tabBarLabel: 'Explore',
          }}
          component={Explore}
        />
        <Tab.Screen
          name={'Notifications'}
          options={{
            tabBarLabel: 'Notifications',
          }}
          component={Notifications}
        />
        <Tab.Screen
          name={'Surveys'}
          options={{
            tabBarLabel: 'Surveys',
          }}
          component={Surveys}
        />
      </Tab.Navigator>
      {/* <Navbar /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  upper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  profile: {
    height: 50,
    width: 50,
    backgroundColor: 'red',
    borderRadius: 60,
  },
  logo: {
    fontSize: 30,
    textTransform: 'uppercase',
    fontWeight: '900',
    color: '#ffffff',
  },
});
