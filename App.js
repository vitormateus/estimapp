import React, { Component } from 'react';
import {
  StyleSheet,
  StatusBar,
  View,
  Text
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Swiper from 'react-native-swiper';
import SlideView from './components/SlideView';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <Swiper dot={this.renderDot()} activeDot={this.renderActiveDot()}>
          <SlideView color='#4186e0'>
            <Text style={[styles.text, styles.centered]}>PP</Text>
          </SlideView>

          <SlideView color='#a4cf30'>
            <Text style={[styles.text, styles.centered]}>P</Text>
          </SlideView>

          <SlideView color='#fd9a00'>
            <Text style={[styles.text, styles.centered]}>M</Text>
          </SlideView>

          <SlideView color='#e8384f'>
            <Text style={[styles.text, styles.centered]}>G</Text>
          </SlideView>

          <SlideView color='#9b59b6'>
            <Ionicons name="ios-infinite" size={200} color="white" style={styles.centered} />
          </SlideView>

          <SlideView color='#2c3e50'>
            <Ionicons name="ios-battery-dead" size={200} color="white" style={styles.centered} />
          </SlideView>
        </Swiper>
      </View>
    );
  }

  renderActiveDot() {
    return <View style={styles.activeDot} />;
  }

  renderDot() {
    return <View style={styles.dot} />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  dot: {
    backgroundColor: 'rgba(255, 255, 255, .3)',
    borderRadius: 4,
    height: 8,
    marginLeft: 4,
    marginRight: 4,
    width: 8,
  },
  activeDot: {
    backgroundColor: '#ffffff',
    borderRadius: 5,
    height: 10,
    marginLeft: 4,
    marginRight: 4,
    width: 10,
  },
  centered: {
    alignSelf: 'center',
  },
  text: {
    color: 'white',
    fontSize: 145,
    fontWeight: 'bold',
    margin: 10,
    textShadowColor: 'rgba(0, 0, 0, .25)',
    textShadowOffset: { width: 3, height: 3 },
  }
});
