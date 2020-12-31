import React, {useState} from 'react';
import {Text, TouchableHighlight, StyleSheet} from 'react-native';
import {colors} from '../Colors';

const BasicButton = (props) => {
  const [selected, setSelected] = useState(false);

  const handlePress = () => {
    setSelected(!selected);
  };

  return (
    <TouchableHighlight
      onPress={handlePress}
      activeOpacity={0.6}
      underlayColor={colors.grey}
      style={selected ? styles.buttonPressed : styles.button}>
      <Text style={styles.buttonText}>{props.title}</Text>
    </TouchableHighlight>
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
    backgroundColor: colors.midGrey,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 10,
    marginVertical: 8,
    marginHorizontal: 16,
  },

  buttonPressed: {
    alignItems: 'center',
    backgroundColor: colors.red,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 10,
    marginVertical: 8,
    marginHorizontal: 16,
  },
});

export default BasicButton;
