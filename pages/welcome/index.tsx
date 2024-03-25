/* eslint-disable prettier/prettier */
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link, useNavigation} from '@react-navigation/native';

export default function Welcome() {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  return (
    <View style={styles.main}>
      <View style={styles.banner}>
        <Text style={styles.bannerText}>
          Welcome to the <Text style={styles.bannerLogo}>Knover</Text>
        </Text>
      </View>
      <View style={styles.form}>
        <TextInput
          style={styles.formInput}
          placeholder="username"
          placeholderTextColor={'#6e6d6d'}
        />
        <TextInput
          style={styles.formInput}
          placeholder="password"
          placeholderTextColor={'#6e6d6d'}
        />
        <TouchableOpacity
          style={styles.forgotView}
          onPress={() => {
            navigation.navigate('Forgot');
          }}>
          <Text>Forgot password?</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.formBtn, {backgroundColor: '#ffffff'}]}
          onPress={() => {
            navigation.navigate('Home');
          }}>
          <Text style={{fontSize: 15, color: '#8d39ed'}}>Log in</Text>
        </TouchableOpacity>
        <View style={styles.dividerContainer}>
          <View style={styles.divider} />
          <Text style={styles.dividerText}>or</Text>
          <View style={styles.divider} />
        </View>
        <TouchableOpacity
          style={[styles.formBtn, {backgroundColor: '#8d39ed'}]}
          onPress={() => {
            navigation.navigate('Signup');
          }}>
          <Text style={{fontSize: 15, color: '#ffffff'}}>
            Create an account
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  main: {
    backgroundColor: '#ffffff',
    flex: 1,
  },
  banner: {
    backgroundColor: '#8d39ed',
    flex: 0.5,
    borderBottomLeftRadius: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bannerText: {
    color: '#ffffff',
    fontWeight: '500',
    fontSize: 40,
  },
  bannerLogo: {
    fontWeight: '900',
    textTransform: 'uppercase',
  },
  form: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 0.5,
    gap: 15,
  },
  formInput: {
    backgroundColor: '#c7c7c7',
    width: '80%',
    // marginBottom: 20,
    borderRadius: 50,
    padding: 15,
  },
  forgotView: {
    width: '75%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  formBtn: {
    borderWidth: 1,
    borderColor: '#8d39ed',
    width: '80%',
    borderRadius: 60,
    padding: 15,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
  },
  dividerContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  divider: {
    width: '20%',
    // width: 30,
    height: 2,
    backgroundColor: '#8d39ed',
  },
  dividerText: {
    color: '#8d39ed',
    marginHorizontal: 10,
  },
});
