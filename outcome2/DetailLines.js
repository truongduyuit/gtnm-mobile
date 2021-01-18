import React, {Component} from 'react';
import {View, Text, TextInput, ScrollView} from 'react-native';
import {
  Table,
  Row,
  Rows,
  TableWrapper,
  Cell,
} from 'react-native-table-component';

const data = {
  tableHead: [
    'Item',
    'Description',
    'Quantity',
    'Unit',
    'Unit Cost',
    'Raw Amount',
    'Discount',
    'Total',
  ],
  tableData: [
    ['T-Shirt', 'Yellow', '10', 'Unit', '2000 $', '10', 0, 20000],
    ['T-Shirt', 'Yellow', '10', 'Unit', '2000 $', '10', 0, 20000],
    ['T-Shirt', 'Yellow', '10', 'Unit', '2000 $', '10', 0, 20000],
    ['T-Shirt', 'Yellow', '10', 'Unit', '2000 $', '10', 0, 20000],
    ['T-Shirt', 'Yellow', '10', 'Unit', '2000 $', '10', 0, 20000],
    ['T-Shirt', 'Yellow', '10', 'Unit', '2000 $', '10', 0, 20000],
    ['T-Shirt', 'Yellow', '10', 'Unit', '2000 $', '10', 0, 20000],
    ['T-Shirt', 'Yellow', '10', 'Unit', '2000 $', '10', 0, 20000],
    ['T-Shirt', 'Yellow', '10', 'Unit', '2000 $', '10', 0, 20000],
    ['T-Shirt', 'Yellow', '10', 'Unit', '2000 $', '10', 0, 20000],
    ['T-Shirt', 'Yellow', '10', 'Unit', '2000 $', '10', 0, 20000],
    ['T-Shirt', 'Yellow', '10', 'Unit', '2000 $', '10', 0, 20000],
  ],
};

export default class DetailLines extends Component {
  constructor (props) {
    super (props);
    this.state = {};
  }

  render () {
    return (
      <View style={{flex: 1}}>
        <View
          style={{
            flex: 3,
            backgroundColor: '#FFF',
            margin: 1,
            marginBottom: 40,
          }}
        >
          <Table borderStyle={{borderWidth: 1, borderColor: '#c8e1ff'}}>
            <Row
              data={data.tableHead}
              style={{
                height: 50, backgroundColor: 'blue'
              }}
              textStyle={{color: '#fff'}}
            />
            <ScrollView>
              <Rows
                data={data.tableData}
                textStyle={{color: '#000', paddingTop: 5, paddingBottom: 5}}
              />
            </ScrollView>
          </Table>
        </View>

        <View
          style={{
            flex: 1,
            backgroundColor: '#8CC6C6',
            borderWidth: 1,
            borderColor: '#c8e1ff',
            borderRadius: 5,
            margin: 3,
            padding: 10,
            justifyContent: 'center',
          }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              padding: 3,
            }}
          >
            <Text style={{flex: 1, fontWeight: 'bold'}}>Total Item Amount</Text>
            <TextInput
              style={{
                flex: 1,
                borderWidth: 1,
                borderColor: '#c8e1ff',
                backgroundColor: '#fff',
                borderRadius: 10,
                paddingRight: 8,
                color: "#000"
              }}
              
              value="200000 $"
              textAlign={'right'}
              editable={false} selectTextOnFocus={false}
            />
          </View>

          <View style={{flex: 1, flexDirection: 'row', padding: 3}}>
            <Text style={{flex: 1, fontWeight: 'bold'}}>Total Discount</Text>
            <TextInput
              style={{
                flex: 1,
                borderWidth: 1,
                borderColor: '#c8e1ff',
                backgroundColor: '#fff',
                borderRadius: 10,
                paddingRight: 8,
                color: "#000"
              }}
              value="0 $"
              textAlign={'right'}
              editable={false} selectTextOnFocus={false}
            />
          </View>

          <View style={{flex: 1, flexDirection: 'row', padding: 3}}>
            <Text style={{flex: 1, fontWeight: 'bold'}}>
              Total Amount to Pay
            </Text>
            <TextInput
              style={{
                flex: 1,
                borderWidth: 1,
                borderColor: '#c8e1ff',
                borderRadius: 10,
                backgroundColor: '#fff',
                paddingRight: 8,
                color: "#000"
              }}
              value="200000 $"
              textAlign={'right'}
              editable={false} selectTextOnFocus={false}
            />
          </View>
        </View>
      </View>
    );
  }
}