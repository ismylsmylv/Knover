/* eslint-disable prettier/prettier */
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faChevronDown,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';

export default function Feed() {
  const [text, onChangeText] = useState('');
  return (
    <View style={styles.feed}>
      <View style={styles.inputField}>
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          style={styles.icon}
          size={20}
          color="black"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="Ask anything to community"
        />
      </View>
      <TouchableOpacity style={styles.card} activeOpacity={0.9}>
        <View style={styles.upper}>
          <Image
            style={styles.profPic}
            source={{
              uri: 'https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg',
            }}
          />
          <Text style={styles.username}>ismylsmylv</Text>
        </View>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          vero vel quo mollitia laudantium dolorem.
        </Text>
        <View style={styles.arrow}>
          <FontAwesomeIcon icon={faChevronDown} color="#8d39ed" />
        </View>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  feed: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingVertical: 20,
  },
  input: {
    padding: 10,
  },
  inputField: {
    borderRadius: 40,
    width: '80%',
    backgroundColor: '#cccccc',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  icon: {
    paddingHorizontal: 20,
  },
  card: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    padding: 20,
    borderRadius: 20,
    borderColor: '#8d39ed',
    borderWidth: 1,
    marginVertical: 20,
    width: '80%',
  },
  profPic: {
    height: 50,
    width: 50,
    borderRadius: 50,
    marginRight: 15,
  },
  upper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    marginBottom: 20,
  },
  username: {
    fontWeight: '500',
    fontSize: 20,
    color: 'black',
    opacity: 0.7,
  },
  text: {
    fontSize: 16,
    color: 'black',
  },
  arrow: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,

    elevation: 13,
  },
});
