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
  Button,
} from 'react-native';
import {Input, SearchBar, Icon} from 'react-native-elements';
import {
  Table,
  Row,
  Rows,
  TableWrapper,
  Cell,
} from 'react-native-table-component';
import Modal from 'react-native-modal';

import ListOrderScreen from './outcome2/ScreenListOrder';
import DetailOrderScreen from './outcome2/ScreenDetailOrder';

export default function App () {
  const [screen, setScreen] = useState ('List');

  return (
    <View style={{flex: 1}}>
      {screen === 'Detail'
        ? <DetailOrderScreen handler={value => setScreen(value)} />
        : <ListOrderScreen handler={value => setScreen(value)}/>}
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
  head: {height: 40, backgroundColor: 'blue'},
  text: {margin: 6, color: '#fff'},
  row: {flexDirection: 'row', backgroundColor: '#537372'},
  textHeaderTable: {margin: 6, fontWeight: 'bold', color: '#fff'},
});
