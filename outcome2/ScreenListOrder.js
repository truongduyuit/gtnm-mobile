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
import {
  Table,
  Row,
  Rows,
  TableWrapper,
  Cell,
} from 'react-native-table-component';
import {
  Modal,
  ModalContent,
  ModalTitle,
  ModalFooter,
  ModalButton,
} from 'react-native-modals';

import BottomModal from './BottomModal';

const data = {
  tableHead: ['Code', 'Customer Name', 'PostImg Date', 'Amount', 'Status'],
  tableData: [
    ['DH001', 'Noo PT', '22/1/2020', '100 $', 1],
    ['DH002', 'Noo PT', '22/1/2020', '100 $', 2],
    ['DH003', 'Noo PT', '22/1/2020', '100 $', 3],
    ['DH004', 'Noo PT', '22/1/2020', '100 $', 1],
    ['DH001', 'Noo PT', '22/1/2020', '100 $', 1],
    ['DH002', 'Noo PT', '22/1/2020', '100 $', 2],
    ['DH003', 'Noo PT', '22/1/2020', '100 $', 3],
    ['DH004', 'Noo PT', '22/1/2020', '100 $', 1],
    ['DH001', 'Noo PT', '22/1/2020', '100 $', 1],
    ['DH002', 'Noo PT', '22/1/2020', '100 $', 2],
    ['DH003', 'Noo PT', '22/1/2020', '100 $', 3],
    ['DH004', 'Noo PT', '22/1/2020', '100 $', 1],
    ['DH001', 'Noo PT', '22/1/2020', '100 $', 1],
    ['DH002', 'Noo PT', '22/1/2020', '100 $', 2],
    ['DH003', 'Noo PT', '22/1/2020', '100 $', 3],
    ['DH004', 'Noo PT', '22/1/2020', '100 $', 1],
  ],
};

function ModalFilter (props) {
  return (
    <Modal
      visible={props.visible}
      onTouchOutside={() => props.handler (false)}
      height={430}
      width={300}
      modalTitle={<ModalTitle title="Filter" />}
      footer={
        <ModalFooter>

          <ModalButton text="OK" onPress={() => props.handler (false)} />
        </ModalFooter>
      }
    >
      <ModalContent>
        <Text style={{fontWeight: 'bold', marginLeft: 10}}>Code</Text>
        <Input
          style={{
            borderWidth: 1,
            borderColor: '#c8e1ff',
            backgroundColor: '#fff',
            paddingLeft: 10,
          }}
          value="DH001"
        />
        <Text style={{fontWeight: 'bold'}}>Customer Name</Text>
        <Input
          style={{
            borderWidth: 1,
            borderColor: '#c8e1ff',
            backgroundColor: '#fff',
            paddingLeft: 10,
          }}
          value="Chung Nguyễn Trường Duy"
        />
        <Text style={{fontWeight: 'bold'}}>Amount</Text>
        <Input
          style={{
            borderWidth: 1,
            borderColor: '#c8e1ff',
            backgroundColor: '#fff',
            paddingLeft: 10,
          }}
          value="2000"
        />
        <View style={{flexDirection: 'row'}}>
          <Button
            icon={<Icon name="remove" size={20} color="blue" />}
            type="outline"
          />
          <Button
            icon={<Icon name="add" size={20} color="blue" />}
            type="outline"
          />
        </View>

        {/* <TextInput
          style={{
            flex: 1,
            borderWidth: 1,
            borderColor: '#c8e1ff',
            backgroundColor: '#fff',
            borderRadius: 10,
            paddingLeft: 10,
          }}
          value="uit.truongduy@gmail.com"
          textAlign={'left'}
        /> */}
      </ModalContent>
    </Modal>
  );
}

export default function ListOrderScreen (props) {
  const [isOpenFilterModal, setIsOpenFilterModal] = useState (false);
  const [isOpenFilter, setIsOpenFilter] = useState (false);
  const [search, setSearch] = useState ('');
  const [enableKeyboard, setEnableKeyboard] = useState (true);

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      {/* navigation */}
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          marginTop: 30,
        }}
      >
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            flex: 2,
            backgroundColor: '#00CCCC',
            borderTopRightRadius: 20,
            borderBottomRightRadius: 20,
          }}
        >
          <Text
            style={{
              color: '#fff',
              fontWeight: 'bold',
              fontSize: 25,
              paddingTop: 5,
              paddingBottom: 5,
            }}
          >
            Order List
          </Text>

        </View>
        <View style={{flex: 1}} />
      </View>

      {/* search */}
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: '#fff',
          zIndex: 999,
          paddingBottom: 15,
          paddingTop: 15,
        }}
        onPress={() => setIsOpenFilterModal (false)}
      >
        <View
          style={{
            flex: 5,
            backgroundColor: '#BDDEDE',
            flexDirection: 'row',
            borderRadius: 7,
            borderColor: '#fff',
            borderWidth: 1,
          }}
        >
          <View
            style={{
              flex: 5,
              flexDirection: 'row',
            }}
          >
            <Icon
              style={{
                marginTop: 6,
                marginLeft: 5,
                paddingTop: 6,
                paddingBottom: 5,
                paddingLeft: 5,
                backgroundColor: '#8CC6C6',
                borderBottomLeftRadius: 10,
                borderTopLeftRadius: 10,
              }}
              name="ios-search"
              type="ionicon"
              size={20}
              color="#537372"
            />
            <TextInput
              style={{
                backgroundColor: '#8CC6C6',
                flex: 3,
                marginTop: 6,
                marginBottom: 6,
                paddingLeft: 5,
                marginRight: search.length > 0 ? 0 : 5,
                borderTopRightRadius: search.length > 0 ? 0 : 10,
                borderBottomRightRadius: search.length > 0 ? 0 : 10,
              }}
              placeholder="Search..."
              onChangeText={text => setSearch (text)}
              value={search}
              underlineColorAndroid="transparent"
            />
            {search.length > 0
              ? <Button
                  icon={
                    <Icon
                      name="ios-close-circle"
                      type="ionicon"
                      size={18}
                      color="#537372"
                    />
                  }
                  buttonStyle={{
                    marginTop: 5,
                    marginBottom: 5,
                    marginRight: 5,
                    backgroundColor: '#8CC6C6',
                    borderTopRightRadius: 10,
                    borderBottomRightRadius: 10,
                    borderColor: 'transparent',
                  }}
                  onPress={() => setSearch ('')}
                />
              : <Text />}

          </View>

          {/* Button filter */}
          <View
            style={{
              flex: 1,
              borderColor: '#fff',
              paddingTop: 3,
              borderRadius: 3,
            }}
          >
            <Button
              icon={<Icon name="ios-funnel" type="ionicon" color="#003748" />}
              title=""
              type="clear"
              onPress={() => setIsOpenFilter (true)}
            />
          </View>
        </View>

        {/* Button cart */}
        <View
          style={{
            flex: 1,
            marginTop: 5,
            borderRadius: 3,
          }}
        >
          <Button
            icon={<Icon name="ios-cart" type="ionicon" color="#00CCCC" />}
            title=""
            type="clear"
            onPress={() => setIsOpenFilterModal (true)}
          />
        </View>
      </View>

      {/* Table */}
      <View
        style={{
          flex: 8,
          backgroundColor: '#FFF',
          margin: 1,
          marginTop: 10,
          zIndex: 1,
        }}
      >
        <Table borderStyle={{borderColor: '#fff', borderWidth: 2}}>
          <Row
            data={data.tableHead}
            style={styles.head}
            textStyle={styles.text}
          />
          <ScrollView>
            {data.tableData.map ((rowData, index) => (
              <TableWrapper
                key={index}
                style={
                  index % 2 !== 0
                    ? {flexDirection: 'row', backgroundColor: '#E5FFFF'}
                    : {flexDirection: 'row'}
                }
              >
                {rowData.map ((cellData, cellIndex) => (
                  <Cell
                    key={cellIndex}
                    data={
                      cellIndex == 4 && cellData === 1
                        ? <Icon name="check" type="evilicon" color="#003748" />
                        : cellIndex == 4 && cellData === 2
                            ? <Icon
                                name="ios-car"
                                type="ionicon"
                                color="#003748"
                              />
                            : cellIndex == 4 && cellData === 3
                                ? <Icon
                                    name="ios-hourglass"
                                    type="ionicon"
                                    color="#003748"
                                  />
                                : cellData
                    }
                    onPress={() => setIsOpenFilterModal (!isOpenFilterModal)}
                    style={{
                      flex: 1,
                      paddingLeft: 5,
                      paddingTop: 10,
                      paddingBottom: 10,
                    }}
                  />
                ))}
              </TableWrapper>
            ))}
          </ScrollView>
        </Table>

      </View>
      {isOpenFilterModal ? <BottomModal handler={props.handler} /> : <View />}
      <ModalFilter
        visible={isOpenFilter}
        handler={value => setIsOpenFilter (value)}
      />
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
});
