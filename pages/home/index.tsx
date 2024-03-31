/* eslint-disable prettier/prettier */
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import Feed from '../../components/Feed';
import Explore from '../Explore';
import Notifications from '../Notifications';
import Surveys from '../Surveys';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faBell,
  faClipboard,
  faEarthAmericas,
  faHouse,
} from '@fortawesome/free-solid-svg-icons';
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
          <Image
            style={styles.profile}
            source={{
              uri: 'https://imgv3.fotor.com/images/blog-richtext-image/10-profile-picture-ideas-to-make-you-stand-out.jpg',
            }}
          />
          {/* <Text>profile</Text> */}
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
            tabBarShowLabel: false,
            tabBarLabel: '',
            tabBarIcon: ({color, size}) => (
              <FontAwesomeIcon
                icon={faHouse}
                style={{color: '#ffffff'}}
                size={25}
              />
            ),
          }}
        />
        <Tab.Screen
          name={'Explore'}
          options={{
            tabBarShowLabel: false,
            tabBarLabel: '',
            tabBarIcon: ({color, size}) => (
              <FontAwesomeIcon
                icon={faEarthAmericas}
                style={{color: '#ffffff'}}
                size={25}
              />
            ),
          }}
          component={Explore}
        />
        <Tab.Screen
          name={'Notifications'}
          options={{
            tabBarShowLabel: false,
            tabBarLabel: '',
            tabBarIcon: ({color, size}) => (
              <FontAwesomeIcon
                icon={faBell}
                style={{color: '#ffffff'}}
                size={25}
              />
            ),
          }}
          component={Notifications}
        />
        <Tab.Screen
          name={'Surveys'}
          options={{
            tabBarShowLabel: false,
            tabBarLabel: '',
            tabBarIcon: ({color, size}) => (
              <FontAwesomeIcon
                icon={faClipboard}
                style={{color: '#ffffff'}}
                size={25}
              />
            ),
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
    // backgroundColor: 'red',
    borderRadius: 60,
  },
  logo: {
    fontSize: 30,
    textTransform: 'uppercase',
    fontWeight: '900',
    color: '#ffffff',
  },
});
