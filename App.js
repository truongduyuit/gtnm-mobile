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
import Sale from './outcome1/sale'
import Bill from './outcome1/bill'
import StatisticalScreen from './outcome3/Statistical'
import ChangeDelivery from './outcome2/ChangeDelivery'

export default function App () {
  const [screen, setScreen] = useState ('List');
  const [statusScreen, setStatusScreen] = useState(null)

  const switchScreen = () => {
    switch(screen) {
      case "ChangeDelivery": {
        return <ChangeDelivery handlerScreen={value => setScreen(value)} handlerStatus={status => setStatusScreen(status)} type={statusScreen}/>
      }
      case "Detail": {
        return <DetailOrderScreen handlerScreen={value => setScreen(value)}/>
      }
      case "Statistical": {
        return <StatisticalScreen handlerScreen={value => setScreen(value)}/>
      }
      case "Sale": {
        return <Sale handlerScreen={value => setScreen(value)}/>
      }
      case "Bill": {
        return <Bill handlerScreen={value => setScreen(value)}/>
      }
      default: {
        return <ListOrderScreen handlerScreen={value => setScreen(value)} handlerStatus={status => setStatusScreen(status)}/>
      }
    }
  }

  return (
    <View style={{flex: 1}}>
      {switchScreen()}
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
