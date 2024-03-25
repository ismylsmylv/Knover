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
import {useNavigation} from '@react-navigation/native';
export default function Forgot() {
  const [step, setstep] = useState(0);
  const [agreed, setagreed] = useState(false);
  const navigation = useNavigation();
  return (
    <View style={styles.main}>
      <View style={styles.banner}>
        <Text style={styles.bannerText}>
          {step == 0
            ? 'Please, enter your email'
            : step == 1
            ? "Enter the code that we've sent via email"
            : step == 2
            ? 'Set up new password'
            : "You're all done, ismylsmylv"}
        </Text>
      </View>
      {step == 0 ? (
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
            <TouchableOpacity
              style={[styles.formBtn, {backgroundColor: '#ffffff'}]}
              onPress={() => {
                setstep(1);
                // navigation.navigate('Home');
              }}>
              <Text style={{fontSize: 15, color: '#8d39ed'}}>Continue</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : step == 1 ? (
        <View style={styles.form}>
          <TextInput
            style={styles.formInput}
            placeholder="code"
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
            <TouchableOpacity
              style={[styles.formBtn, {backgroundColor: '#ffffff'}]}
              onPress={() => {
                setstep(2);
                // navigation.navigate('Home');
              }}>
              <Text style={{fontSize: 15, color: '#8d39ed'}}>Continue</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : step == 2 ? (
        <View style={styles.form}>
          <TextInput
            style={styles.formInput}
            placeholder="enter password"
            placeholderTextColor={'#6e6d6d'}
          />
          <TextInput
            style={styles.formInput}
            placeholder="re-enter password"
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
            <TouchableOpacity
              style={[styles.formBtn, {backgroundColor: '#ffffff'}]}
              onPress={() => {
                setstep(3);
                // navigation.navigate('Home');
              }}>
              <Text style={{fontSize: 15, color: '#8d39ed'}}>Continue</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <View style={[styles.form, {justifyContent: 'space-between'}]}>
          <Text style={styles.completeText}>
            Password has been reset succesfully
          </Text>
          <TouchableOpacity
            style={[
              styles.formBtn,
              {backgroundColor: step == 3 ? '#8d39ed' : '#ffffff'},
            ]}
            onPress={() => {
              // setstep(4);
              navigation.navigate('Welcome');
            }}>
            <Text
              style={{fontSize: 15, color: step == 3 ? '#ffffff' : '#8d39ed'}}>
              Back to login
            </Text>
          </TouchableOpacity>
        </View>
      )}
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
    padding: 20,
    width: '100%',
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
  formInputDates: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    marginTop: 20,
  },
  formInputDate: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    borderColor: '#8d39ed',
  },
  shortLine: {
    width: 20,
    height: 1,
    backgroundColor: '#8d39ed',
  },
  completeText: {
    fontSize: 18,
    color: '#000000',
    textAlign: 'center',
    width: '60%',
  },
});
