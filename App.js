import React, { Component } from 'react';
import {
  StyleSheet,
  StatusBar,
  View
} from 'react-native';

import Swiper from 'react-native-swiper';

import TextSlideView from './components/TextSlideView';
import IconSlideView from './components/IconSlideView';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <Swiper dot={<View style={styles.dot} />} activeDot={<View style={styles.activeDot} />}>
          <TextSlideView color='#4186e0'>PP</TextSlideView>
          <TextSlideView color='#a4cf30'>P</TextSlideView>
          <TextSlideView color='#fd9a00'>M</TextSlideView>
          <TextSlideView color='#e8384f'>G</TextSlideView>
          <IconSlideView color='#9b59b6' iconName="ios-infinite" />
          <IconSlideView color='#2c3e50' iconName="ios-battery-dead" />
        </Swiper>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  dot: {
    marginLeft: 4,
    marginRight: 4,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(255,255,255,.3)'
  },
  activeDot: {
    marginLeft: 4,
    marginRight: 4,
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#ffffff'
  }
});
