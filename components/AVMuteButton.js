import React, {useState} from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import {colors} from '../Colors';
import {constructUDPMessage, sendUDP} from '../socket';

const AVMUTE = 'AVMUTE';

const AVMuteButton = (props) => {
  const [selected, setSelected] = useState(false);
  const handlePress = () => {
    setSelected(!selected);
    sendUDP(constructUDPMessage(AVMUTE, selected), props.socket);
  };
  return (
    <TouchableOpacity
      onLongPress={handlePress}
      style={selected ? styles.buttonPressed : styles.button}>
      <Text style={styles.buttonText}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonText: {
    fontSize: 14,
    fontWeight: '800',
    color: colors.lightblue,
    textTransform: 'uppercase',
  },
  button: {
    alignItems: 'center',
    backgroundColor: colors.yellow,
    width: 100,
    height: 100,
    paddingTop: 40,
    borderRadius: 50,
  },

  buttonPressed: {
    alignItems: 'center',
    backgroundColor: colors.red,
    width: 100,
    height: 100,
    paddingTop: 40,
    borderRadius: 50,
  },
});

export default AVMuteButton;
