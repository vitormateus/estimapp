import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

export default class SlideView extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={[{ backgroundColor: this.props.color }, styles.slide, this.props.style]}>
        <View style={styles.section}>
          {this.props.children}
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
  }
});