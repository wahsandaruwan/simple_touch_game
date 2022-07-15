import React, {Component, useState} from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  ImageBackground,
  Animated,
  TouchableOpacity,
} from 'react-native';
import bgImage from './assets/wall.png';
import mrT from './assets/MsT.png';
import mrB from './assets/MrB.png';
import mrC from './assets/MrC.png';

// For the velocity
let initialDuration = 1000;

const App = () => {
  const [toggle1, setToggle1] = useState(0);
  const [toggle2, setToggle2] = useState(1);
  const value1 = useState(new Animated.ValueXY({x: 0, y: 5}))[0];
  const value2 = useState(new Animated.ValueXY({x: 0, y: -10}))[0];

  // Move first icon
  function moveIcon1() {
    // Gain velocity
    initialDuration = initialDuration + 5;

    // Identify relocation
    if (toggle1 === 0) {
      Animated.timing(value1, {
        toValue: {x: 0, y: 190},
        duration: initialDuration,
        useNativeDriver: false,
      }).start();
      setToggle1(1);
    } else {
      Animated.timing(value1, {
        toValue: {x: 0, y: 5},
        duration: initialDuration,
        useNativeDriver: false,
      }).start();
      setToggle1(0);
    }
  }

  // Move second icon
  function moveIcon2() {
    // Gain velocity
    initialDuration = initialDuration + 5;

    // Identify relocation
    if (toggle2 === 1) {
      Animated.timing(value2, {
        toValue: {x: 0, y: -320},
        duration: initialDuration,
        useNativeDriver: false,
      }).start();
      setToggle2(0);
    } else {
      Animated.timing(value2, {
        toValue: {x: 0, y: -10},
        duration: initialDuration,
        useNativeDriver: false,
      }).start();
      setToggle2(1);
    }
  }

  return (
    <ImageBackground source={bgImage} style={styles.container}>
      <SafeAreaView style={{flex: 1}}>
        <TouchableOpacity style={styles.firstIcon} onPress={moveIcon2}>
          <Animated.View style={[styles.firstIcon, value1.getLayout()]}>
            <ImageBackground style={styles.firstIcon} source={mrT} />
          </Animated.View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.secondIcon} onPress={moveIcon1}>
          <Animated.View style={[styles.secondIcon, value2.getLayout()]}>
            <ImageBackground style={styles.secondIcon} source={mrB} />
          </Animated.View>
        </TouchableOpacity>
        <ImageBackground style={styles.thirdIcon} source={mrC} />
        <View style={styles.topRigidBody}></View>
        <View style={styles.bottomRigidBody}></View>
        <View style={styles.leftRigidBody}></View>
        <View style={styles.rightRigidBody}></View>
        <View style={styles.firstRigidBody}></View>
        <View style={styles.secondRigidBody}></View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  firstIcon: {
    position: 'absolute',
    top: '16.25%',
    alignSelf: 'center',
    width: 50,
    height: 50,
  },
  secondIcon: {
    position: 'absolute',
    top: '48.5%',
    alignSelf: 'center',
    width: 50,
    height: 50,
  },
  thirdIcon: {
    position: 'absolute',
    top: '81%',
    alignSelf: 'center',
    width: 50,
    height: 50,
  },
  topRigidBody: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: '3%',
    backgroundColor: '#4266f5',
  },
  bottomRigidBody: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '3%',
    backgroundColor: '#4266f5',
  },
  leftRigidBody: {
    width: '5%',
    height: '100%',
    backgroundColor: '#4266f5',
  },
  rightRigidBody: {
    position: 'absolute',
    right: 0,
    width: '5%',
    height: '100%',
    backgroundColor: '#4266f5',
  },
  firstRigidBody: {
    position: 'absolute',
    top: '32.5%',
    width: '100%',
    height: '3%',
    backgroundColor: '#4266f5',
  },
  secondRigidBody: {
    position: 'absolute',
    top: '65%',
    width: '100%',
    height: '3%',
    backgroundColor: '#4266f5',
  },
});
