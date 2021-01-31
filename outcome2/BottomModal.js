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
  const SetScreenDelivery = async (screen, status) => {
    props.handlerScreen(screen)
    props.handlerStatus(status)
    console.log("screen", screen)
    console.log("status", status)
  }
  return (
    <View
      style={{
        flex: 8,
        background: '#fff',
        margin: 3,
        borderRadius: 5,
        zIndex: 999,
        justifyContent: 'flex-end',
      }}
    >
      <Button
          title="Change delivery place"
          type="clear"
          onPress={() => SetScreenDelivery('ChangeDelivery', 'time') }
        />
        <Button
          title="Change delivery time"
          type="clear"
          onPress={() => SetScreenDelivery('ChangeDelivery', 'place')}
        />
      <Button
          title="View"
          type="clear"
          onPress={() => props.handlerScreen ('Detail')}
        />
        <Button title="Edit" type="clear" onPress={() => props.handlerScreen ('Detail')}/>
        <Button title="Delete" type="clear" onPress={() => props.handlerScreen ('Statistical')}/>
        <Button title="Create new from this Customer" type="clear" onPress={() => props.handlerScreen ('Sale')}/>
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
