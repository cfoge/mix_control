/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';

import {SafeAreaView, StyleSheet, View, Text, StatusBar} from 'react-native';
import AVMute from './components/AVMuteButton';
import AutoFadeModule from './components/AutoFadeModule';
import {colors} from './Colors';
import TwoChannelMixer from './components/TwoChannelMixer';
import {initSocket} from './socket';

const App = () => {
  const [mySocket, setMySocket] = useState(initSocket);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={styles.body}>
        <SafeAreaView style={{flex: 1}}>
          <View style={styles.container}>
            <TwoChannelMixer></TwoChannelMixer>
            <View style={styles.controllButtons}>
              <View>
                <AVMute title={'AV Mute'} socket={mySocket} />
              </View>
              <View>
                <AutoFadeModule title={'Auto Fade'} />
              </View>
            </View>
          </View>
          <Text style={styles.title}>Video Mixer Control</Text>
        </SafeAreaView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: colors.grey,
    flex: 1,

    paddingHorizontal: 24,
  },

  container: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },

  inputList: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },

  controllButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',

    paddingVertical: 8,
  },

  title: {
    fontSize: 34,
    fontWeight: '700',
    color: colors.yellow,
    textAlign: 'center',
    marginTop: 8,
  },

  buttonText: {
    fontSize: 14,
    fontWeight: '800',
    color: colors.yellow,
    textTransform: 'uppercase',
  },

  inputText: {
    fontSize: 28,
    fontWeight: '800',
    color: colors.grey,
    textTransform: 'uppercase',
    textAlign: 'center',
  },

  test1: {
    height: 100,
    width: 100,
    backgroundColor: 'red',
  },
});

export default App;
