import Slider from '@react-native-community/slider';
import React, {useState} from 'react';
import {Animated, StyleSheet, useWindowDimensions, View} from 'react-native';

import {colors} from '../Colors';

const TbarSlider = (props) => {
  const silderWidth = useWindowDimensions().width - 48;

  return (
    <View style={styles.container}>
      <Slider
        style={{width: silderWidth, height: 30}}
        minimumValue={0}
        maximumValue={1}
        step={0.01}
        // thumbImage={require('../assets/tbar.png')}
        // trackImage={require('../assets/tbarTrack.png')}
        value={props.sliderValue}
        onValueChange={(value) => {
          props.onValueChange(value);
        }}
        onSlidingComplete={(value) => {
          props.onValueChange(value);
        }}
        minimumTrackTintColor={colors.lightgray}
        maximumTrackTintColor={colors.lightgray}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 150,
    height: 150,
    backgroundColor: '#5AD2F4',
    margin: 4,
  },
});

export default TbarSlider;
