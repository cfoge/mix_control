import React, {useState} from 'react';
import {Text, TouchableHighlight, StyleSheet} from 'react-native';
import {colors} from '../Colors';
import {constructUDPMessage, sendUDP} from '../socket';

const BasicButton = (props) => {
  const [selected, setSelected] = useState(false);

  const handlePress = () => {
    setSelected(!selected);
    sendUDP(constructUDPMessage(props.UDPLabel, !selected), props.socket);
  };

  return (
    <TouchableHighlight
      onPress={handlePress}
      activeOpacity={0.6}
      underlayColor={colors.grey}
      style={selected ? styles.buttonPressed : styles.button}>
      <Text style={selected ? styles.buttonTextPressed : styles.buttonText}>
        {props.title}
      </Text>
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
    backgroundColor: colors.yellow,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 10,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  buttonTextPressed: {
    fontSize: 14,
    fontWeight: '800',
    color: colors.midGrey,
    textTransform: 'uppercase',
  },
});

export default BasicButton;
