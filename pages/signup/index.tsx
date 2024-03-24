/* eslint-disable prettier/prettier */
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import CheckBox from '@react-native-community/checkbox';
export default function Signup() {
  const [step, setstep] = useState(0);
  const [agreed, setagreed] = useState(false);
  return (
    <View style={styles.main}>
      <View style={styles.banner}>
        <Text style={styles.bannerText}>
          {step == 0
            ? 'Please, enter your email'
            : step == 1
            ? 'Choose username'
            : step == 2
            ? 'Set up password'
            : step == 3
            ? 'Set up password'
            : step == 4
            ? 'Tell us about yourself'
            : "You're all done, ismylsmylv"}
        </Text>
      </View>
      <View style={styles.form}>
        <TextInput
          style={styles.formInput}
          placeholder="email"
          placeholderTextColor={'#6e6d6d'}
        />
        <View
          style={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            gap: 20,
            marginTop: '40%',
          }}>
          <View style={styles.agreement}>
            <CheckBox
              tintColor="#e8e8e8"
              onFillColor="#ff0000"
              hideBox={false}
              disabled={false}
              value={agreed}
              onValueChange={() => setagreed(!agreed)}
            />
            <Text style={{color: 'black'}}>
              I accept Terms and conditions and Privacy Policy
            </Text>
          </View>
          <TouchableOpacity
            style={[styles.formBtn, {backgroundColor: '#ffffff'}]}
            onPress={() => {
              // navigation.navigate('Home');
            }}>
            <Text style={{fontSize: 15, color: '#8d39ed'}}>Continue</Text>
          </TouchableOpacity>
        </View>
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
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bannerText: {
    color: '#ffffff',
    fontWeight: '500',
    fontSize: 40,
    textAlign: 'left',
    marginRight: 20,
  },
  form: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: '20%',
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
  agreement: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
});
