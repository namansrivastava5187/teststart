import React from 'react';
import { View, Text, Dimensions, TouchableOpacity, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';
import LottieView from 'lottie-react-native';
import Svg, { Defs, LinearGradient, Stop, Rect } from 'react-native-svg';

// Replace these paths with the actual paths to your Lottie JSON files
const animation4 = require('../App/Assets/Images/Animation - 1722785627001.json');
const animation2 = require('../App/Assets/Images/Animation - 1722785534555.json');
const animation1 = require('../App/Assets/Images/Animation - 1722785609267.json');
const animation3 = require('../App/Assets/Images/Animation - 1722785621094.json');

const { width, height } = Dimensions.get('window');

export default function IntroScreen({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <Svg height="100%" width="100%" style={StyleSheet.absoluteFill}>
        <Defs>
          <LinearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
            <Stop offset="0" stopColor="#0500FF" stopOpacity="1" />
            <Stop offset="1" stopColor="#0500FF" stopOpacity="1" />
          </LinearGradient>
        </Defs>
        <Rect x="0" y="0" width="100%" height="100%" fill="url(#grad)" />
      </Svg>

    <Swiper  loop={false} showsPagination={true}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <LottieView
          source={animation1}
          autoPlay
          loop
          style={{ width: width * 0.8, height: height * 0.5 ,marginTop:200 }}
        />
        <View style={{ flex: 1 }}>
        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 32, textAlign: 'center', marginTop:-85}}> 
         Welcome To  CollegeBuddy
        </Text>
        </View>
      </View>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <LottieView
          source={animation2}
          autoPlay
          loop
          style={{ width: width * 0.8, height: height * 0.5 ,marginTop:200}}
        /><View style={{ flex: 1 }}>
        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 32, textAlign: 'center', marginTop:-85}}> 
         Time Saving
        </Text>
        </View>
      </View>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <LottieView
          source={animation3}
          autoPlay
          loop
          style={{ width: width * 0.8, height: height * 0.5, marginTop:200 }}
        />
        <View style={{ flex: 1 }}>
        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 32, textAlign: 'center', marginTop:-85}}> 
         Track Your Attendance
        </Text>
        </View>
      </View>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <LottieView
          source={animation4}
          autoPlay
          loop
          style={{ width: width * 0.8, height: height * 0.3 ,marginTop:270}}
        />
        <View style={{ flex: 1 }}>
        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 32, textAlign: 'center', marginBottom:10}}> 
         One Solution For All
        </Text>
        </View>
        <TouchableOpacity
          style={{marginBottom:80, padding: 10, backgroundColor: 'white', borderRadius: 10 }}
          onPress={() => navigation.navigate('Welcome')}
        >
          <Text style={{ fontWeight: 'bold', color: 'black' }}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </Swiper>
    </View>
  );
}
