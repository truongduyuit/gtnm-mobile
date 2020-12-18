import {StatusBar} from 'expo-status-bar';
import React, {useState} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import {Input, SearchBar, Icon, Button} from 'react-native-elements';

export default function BottomModal (props) {
  return (
    <View
      style={{
        flex: 5,
        background: '#fff',
        margin: 3,
        borderRadius: 5,
        zIndex: 999,
        justifyContent: 'flex-end',
      }}
    >
      <Button
          title="View"
          type="clear"
          onPress={() => props.handler ('Detail')}
        />
        <Button title="Edit" type="clear" />
        <Button title="Delete" type="clear" />
        <Button title="Create new from this Customer" type="clear" />
    </View>
  );
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
