import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

import TextSlideView from './TextSlideView';
import { Ionicons } from '@expo/vector-icons';

export default class IconSlideView extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <TextSlideView color={this.props.color} style={[styles.slide, this.props.style]}>
        <Ionicons name={this.props.iconName} size={200} color="white" />
      </TextSlideView>
    );
  }
}

const styles = StyleSheet.create({
  slide: {
    flex: 1
  }
});
