/* eslint-disable prettier/prettier */
import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

export default function Explore() {
  const image = {
    uri: 'https://d28jbe41jq1wak.cloudfront.net/BlogsImages/exploring-pop-art-defini-638237807747168508.jpg',
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.topics}>
          <TouchableOpacity>
            <ImageBackground
              source={image}
              resizeMode="cover"
              style={styles.image}>
              <Text style={styles.imageText}>Art&Culture</Text>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity>
            <ImageBackground
              source={image}
              resizeMode="cover"
              style={styles.image}>
              <Text style={styles.imageText}>Art&Culture</Text>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity>
            <ImageBackground
              source={image}
              resizeMode="cover"
              style={styles.image}>
              <Text style={styles.imageText}>Art&Culture</Text>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity>
            <ImageBackground
              source={image}
              resizeMode="cover"
              style={styles.image}>
              <Text style={styles.imageText}>Art&Culture</Text>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity>
            <ImageBackground
              source={image}
              resizeMode="cover"
              style={styles.image}>
              <Text style={styles.imageText}>Art&Culture</Text>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity>
            <ImageBackground
              source={image}
              resizeMode="cover"
              style={styles.image}>
              <Text style={styles.imageText}>Art&Culture</Text>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity>
            <ImageBackground
              source={image}
              resizeMode="cover"
              style={styles.image}>
              <Text style={styles.imageText}>Art&Culture</Text>
            </ImageBackground>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 100,
    marginTop: 15,
    width: '100%',
    borderRadius: 50,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  topics: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: '100%',
  },
  imageText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: '900',
    fontSize: 30,
  },
});
