import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  StatusBar,
  View
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import Swiper from 'react-native-swiper';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <Swiper showsButtons={true}
          dot={<View style={styles.dot} />} activeDot={<View style={styles.activeDot} />}
          prevButton={<Text style={styles.pagination}>‹</Text>} nextButton={<Text style={styles.pagination}>›</Text>}
          >
          <View style={styles.pp}>
            <View style={styles.section}>
              <Text style={styles.task}>
              PP
              </Text>
            </View>
          </View>
          <View style={styles.p}>
            <View style={styles.section}>
              <Text style={styles.task}>
              P
              </Text>
            </View>
          </View>
          <View style={styles.m}>
            <View style={styles.section}>
              <Text style={styles.task}>
              M
              </Text>
            </View>
          </View>
          <View style={styles.g}>
            <View style={styles.section}>
              <Text style={styles.task}>
                G
              </Text>
            </View>
          </View>
          <View style={styles.infinity}>
            <View style={styles.section}>
              <Text style={styles.task}>
                <Ionicons name="ios-infinite" size={200} color="white" />
              </Text>
            </View>
          </View>
          <View style={styles.skull}>
            <View style={styles.section}>
              <Text style={styles.task}>
                <Ionicons name="ios-battery-dead" size={200} color="white" />
              </Text>
            </View>
          </View>
        </Swiper>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ffffff'
  },
  pagination: {
    color: '#ffffff',
    fontSize: 30
  },
  container: {
    flex: 1
  },
  section: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  task: {
    margin: 10,
    textAlign: 'center',
    fontSize: 145,
    fontWeight: 'bold',
    color: 'white'
  },
  pp: {
    flex: 1,
    backgroundColor: '#4186e0'
  },
  p: {
    flex: 1,
    backgroundColor: '#a4cf30'
  },
  m: {
    flex: 1,
    backgroundColor: '#fd9a00'
  },
  g: {
    flex: 1,
    backgroundColor: '#e8384f'
  },
  infinity: {
    flex: 1,
    backgroundColor: '#9b59b6'
  },
  skull: {
    flex: 1,
    backgroundColor: '#2c3e50'
  }
});
