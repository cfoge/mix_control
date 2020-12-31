import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity, StyleSheet, View} from 'react-native';
import {colors} from '../Colors';
import dgram from 'react-native-udp';
import Slider from '@react-native-community/slider';

const AutoFadeModule = (props) => {
  const [selected, setSelected] = useState(false);
  const [autoFadeTime, setautoFadeTime] = useState(1);

  useEffect(() => {}, []);

  const handlePress = () => {
    setSelected(!selected);
  };

  const onValueChange = (value) => {
    setautoFadeTime(value);
  };

  return (
    <>
      <TouchableOpacity
        onPress={handlePress}
        style={selected ? styles.buttonPressed : styles.button}>
        <Text style={styles.buttonText}>{props.title}</Text>
      </TouchableOpacity>
      <Text style={styles.fadeTimeText}>{autoFadeTime.toFixed(1)} Sec</Text>
      <Slider
        minimumValue={0}
        maximumValue={25}
        step={0.1}
        // thumbImage={require('../assets/slider1.png')}
        value={autoFadeTime}
        onValueChange={(value) => {
          onValueChange(value);
        }}
        onSlidingComplete={(value) => {
          onValueChange(value);
        }}
        minimumTrackTintColor={colors.teal}
        maximumTrackTintColor={colors.lightgray}
      />
    </>
  );
};

const styles = StyleSheet.create({
  buttonText: {
    fontSize: 14,
    fontWeight: '800',
    color: colors.yellow,
    textTransform: 'uppercase',
  },

  fadeTimeText: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.yellow,
    textTransform: 'uppercase',
    textAlign: 'center',
    paddingTop: 12,
  },

  button: {
    alignItems: 'center',
    backgroundColor: colors.teal,
    padding: 40,
    borderRadius: 16,
  },

  buttonPressed: {
    alignItems: 'center',
    backgroundColor: colors.red,
    padding: 40,
    borderRadius: 16,
  },
});

export default AutoFadeModule;
