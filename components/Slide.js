import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Slide extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.slide}>
        <View style={styles.section}>
          <Text style={styles.size}>
          PP
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  slide: {
    flex: 1
  },
  section: {
    flex: 1,
    justifyContent: 'center'
  },
  size: {
    margin: 10,
    textAlign: 'center',
    fontSize: 145,
    fontWeight: 'bold',
    color: 'white'
  }
});