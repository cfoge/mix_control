import React, {useState} from 'react';
import {Text, TouchableOpacity, StyleSheet, View} from 'react-native';
import {colors} from '../Colors';

const BasicButton = (props) => {
  const [selected, setSelected] = useState(false);
  const handlePress = () => {
    setSelected(!selected);
  };
  const transportButtonColor = () => {
    const bgColor = colors.lightgray.replace('#', '0x');
    const bgColorAsNumber = parseInt(Number(bgColor));

    const fgColor = colors.red.replace('#', '0x');
    const fgColorAsNumber = parseInt(Number(fgColor));

    const colorOutput = Math.floor(
      props.sliderValue * (bgColorAsNumber - fgColorAsNumber) + fgColorAsNumber,
    );

    const colorOut = colorOutput.toString(16);
    console.log(typeof colorOut);
    console.log(colorOut);

    return `#${colorOut}`;
  };

  return (
    <TouchableOpacity
      onPressIn={handlePress}
      onPressOut={handlePress}
      style={{...styles.button, backgroundColor: transportButtonColor()}}>
      <Text style={styles.buttonText}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonText: {
    fontSize: 14,
    fontWeight: '800',
    color: colors.yellow,
    textTransform: 'uppercase',
  },
  button: {
    alignItems: 'center',
    backgroundColor: colors.lightgray,
    padding: 30,
    borderRadius: 16,
  },

  buttonPressed: {
    alignItems: 'center',
    backgroundColor: colors.red,
    padding: 30,
    borderRadius: 16,
  },

  led: {
    backgroundColor: colors.red,
  },
});

export default BasicButton;
