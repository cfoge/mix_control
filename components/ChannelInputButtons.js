import React, {useState} from 'react';
import {StyleSheet, View, Text, Animated} from 'react-native';
import BasicButton from './BasicButton';
import {colors} from '../Colors';

function ChannelInputButtons(props) {
  const maxNumberOfButtons = [1, 2, 3, 4];
  const numberOfButtons = maxNumberOfButtons.slice(0, props.numberOfButtons);
  const [selected, setSelected] = useState(1);

  const checkSelected = (number) => {
    return number === selected;
  };

  const buttonTriggered = (number) => {
    setSelected(number);
  };

  const listItems = numberOfButtons.map((number) => (
    <BasicButton
      title={`${props.buttonText} ${number}`}
      key={props.label + props.buttonText + number}
      socket={props.socket}
      buttonSelected={checkSelected(number)}
      buttonNumber={number}
      buttonTriggered={buttonTriggered}
      udpLable={`${props.label} ${props.buttonText} ${number}`}
    />
  ));
  return (
    <Animated.View
      style={{
        ...styles.inputContainer,
        ...props.animatedStyle,
        ...props.borderStyle,
      }}>
      <View style={styles.inputList}>
        <Text style={styles.inputText}>{props.label} </Text>
        {listItems}
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  inputList: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },

  inputContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: colors.lightgray,
    paddingHorizontal: 4,
    paddingVertical: 10,
  },

  inputText: {
    fontSize: 28,
    fontWeight: '800',
    color: colors.grey,
    textTransform: 'uppercase',
    textAlign: 'center',
  },
});

export default ChannelInputButtons;
