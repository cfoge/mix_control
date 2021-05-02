import React from 'react';

import {Formik} from 'formik';

import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {colors} from '../Colors';

export default function SettingsScreen(props) {
  return (
    <View style={styles.body}>
      <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.container}>
          <Formik
            initialValues={{ipAddress: '192.165.1.255'}}
            onSubmit={(values) => console.log(values)}>
            {({handleChange, handleBlur, handleSubmit, values}) => (
              <View>
                <Text style={styles.text}>IP address of video mixer</Text>
                <TextInput
                  style={styles.textBox}
                  onChangeText={handleChange('ipAddress')}
                  onBlur={handleBlur('ipAddress')}
                  value={values.ipAddress}
                />
                <TouchableOpacity
                  onPress={handleSubmit}
                  style={styles.confirmButton}>
                  <Text style={styles.text}>Update</Text>
                </TouchableOpacity>
              </View>
            )}
          </Formik>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  body: {
    backgroundColor: colors.grey,
    flex: 1,
    paddingHorizontal: 24,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  text: {
    fontSize: 14,
    fontWeight: '800',
    color: colors.yellow,
    textTransform: 'uppercase',
  },
  textBox: {
    fontSize: 14,
    fontWeight: '800',
    color: colors.superlightgray,
    textTransform: 'uppercase',
    backgroundColor: 'white',
    paddingVertical: 6,
    marginVertical: 8,
    textAlign: 'center',
  },

  confirmButton: {
    alignItems: 'center',
    backgroundColor: colors.trueGreen,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 10,
    marginVertical: 8,
    marginHorizontal: 16,
  },
});
