import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';

import SlideView from './SlideView';

export default class TextSlideView extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <SlideView color={this.props.color} style={[styles.slide, this.props.style]}>
        <Text style={styles.text}>
          {this.props.children}
        </Text>
      </SlideView>
    );
  }
}

const styles = StyleSheet.create({
  slide: {
    flex: 1
  },
  text: {
    margin: 10,
    textAlign: 'center',
    fontSize: 145,
    fontWeight: 'bold',
    textShadowColor: 'rgba(0,0,0,.25)',
    textShadowOffset: { width: 3, height: 3 },
    color: 'white'
  }
});