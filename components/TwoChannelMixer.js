import React, {useEffect, useState} from 'react';
import {StyleSheet, Animated, View} from 'react-native';
import TbarSlider from './TbarSlider';
import ChannelInputButtons from './ChannelInputButtons';

const TwoChannelMixer = () => {
  const [sliderValue, setSliderValue] = useState(0.5);
  const onValueChange = (value) => {
    setSliderValue(value);
    handleAnimation(value);
  };
  const [animation, setAnimation] = useState(new Animated.Value(0));
  const greenTransport = 'rgb(0,170,128)';
  const greyTransport = 'rgb(68,68,68)';

  useEffect(() => {
    onValueChange(0.5);
  }, []);

  const handleAnimation = (value) => {
    Animated.timing(animation, {
      toValue: value,
      duration: 50,
      useNativeDriver: false,
    }).start();
  };

  const boxInterpolation = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [greenTransport, greyTransport],
  });

  const animatedStyle = {
    backgroundColor: boxInterpolation,
  };
  const boxInterpolationTwo = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [greyTransport, greenTransport],
  });

  const animatedStyleTwo = {
    backgroundColor: boxInterpolationTwo,
  };
  return (
    <View>
      <View style={styles.inputWraper}>
        <ChannelInputButtons
          animatedStyle={animatedStyle}
          numberOfButtons={4}
          label={'A'}
          buttonText={'Input'}
        />

        <ChannelInputButtons
          animatedStyle={animatedStyleTwo}
          numberOfButtons={4}
          label={'B'}
          buttonText={'Input'}
        />
      </View>
      <View style={styles.sliderContainer}>
        <TbarSlider sliderValue={sliderValue} onValueChange={onValueChange} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputWraper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sliderContainer: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    paddingVertical: 24,
  },
});

export default TwoChannelMixer;
