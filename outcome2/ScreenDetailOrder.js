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

import DetailHeader from './DetailHeader';
import DetailLines from './DetailLines';

export default function DetailOrderScreen (props) {
  const [type, setType] = useState ('Header');

  return (
    <View style={{flex: 1}}>

      {/* navigation bar */}
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          marginTop: 20,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            marginLeft: 10,
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}
        >
          <Icon name="ios-arrow-back" type="ionicon" color="blue" />
          <Text onPress = {() => props.handlerScreen("List")} style={{color: 'blue', padding: 5, fontSize: 20}}>Back</Text>
        </View>
        <View
          style={{
            flex: 2,
            flexDirection: 'row',
            justifyContent: 'space-around',
            backgroundColor: '#00CCCC',
            paddingTop: 10,
            paddingBottom: 10,
            borderTopLeftRadius: 20,
            borderBottomLeftRadius: 20,
          }}
        >
          <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 20}}>
            Order No: DH001
          </Text>
        </View>
      </View>

      {/* Header */}
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <View
          style={{
            width: 100,
            borderRadius: 15,
          }}
        >
          <Button
            title="Header"
            color={type === 'Header' ? '' : '#003748'}
            onPress={() => setType ('Header')}
          />
        </View>
        <View
          style={{
            width: 100,
            borderRadius: 15,
          }}
        >
          <Button
            title="Lines"
            color={type === 'Lines' ? '' : '#003748'}
            onPress={() => setType ('Lines')}
          />
        </View>

      </View>

      {/* Button */}
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          backgroundColor: '#8CC6C6',
          marginLeft: 50,
          marginRight: 50,
          marginBottom: 25,
          borderRadius: 40,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <View style={{flex: 1, marginLeft: 20}}>
          <Icon name="ios-add-circle" type="ionicon" color="#fff" />
        </View>

        <View style={{flex: 1}}>
          <Icon name="ios-create" type="ionicon" color="#fff" />
        </View>

        <View style={{flex: 1}}>
          <Icon name="ios-paper" type="ionicon" color="#fff" />
        </View>

        <View style={{flex: 1, marginRight: 20}}>
          <Icon name="ios-trash" type="ionicon" color="#517fa4" />
        </View>
      </View>

      {/* Info */}
      <View
        style={{
          flex: 9,
        }}
      >

        {type === 'Header' ? <DetailHeader /> : <DetailLines />}

      </View>
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
