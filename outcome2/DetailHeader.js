import React, { Component } from 'react';
import { View, Text, TextInput} from 'react-native';

export default class DetailHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
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
          {/* 1 */}
          <View style={{flex: 1, marginLeft: 30, marginRight: 30, marginBottom: 7}}>
            <Text style={{fontWeight: 'bold'}}>Customer Name</Text>
            <TextInput
              style={{
                flex: 1,
                borderWidth: 1,
                borderColor: '#c8e1ff',
                backgroundColor: '#fff',
                borderRadius: 10,
                paddingLeft: 10,
                color: "#000"
              }}
              value="Chung Nguyễn Trường Duy"
              textAlign={'left'}
              editable={false} selectTextOnFocus={false}
            />
          </View>

          {/* 2 */}
          <View style={{flex: 1, marginLeft: 30, marginRight: 30, marginBottom: 7}}>
            <Text style={{fontWeight: 'bold'}}>Phone Number</Text>
            <TextInput
              style={{
                flex: 1,
                borderWidth: 1,
                borderColor: '#c8e1ff',
                backgroundColor: '#fff',
                borderRadius: 10,
                paddingLeft: 10,
                color: "#000"
              }}
              value="0342525123"
              textAlign={'left'}
              editable={false} selectTextOnFocus={false}
            />
          </View>

          {/* 3 */}
          <View style={{flex: 1, marginLeft: 30, marginRight: 30, marginBottom: 7}}>
            <Text style={{fontWeight: 'bold'}}>Email</Text>
            <TextInput
              style={{
                flex: 1,
                borderWidth: 1,
                borderColor: '#c8e1ff',
                backgroundColor: '#fff',
                borderRadius: 10,
                paddingLeft: 10,
                color: "#000"
              }}
              value="uit.truongduy@gmail.com"
              textAlign={'left'}
              editable={false} selectTextOnFocus={false}
            />
          </View>

          {/* 4 */}
          <View style={{flex: 1, marginLeft: 30, marginRight: 30, marginBottom: 7}}>
            <Text style={{fontWeight: 'bold'}}>Payment Type</Text>
            <TextInput
              style={{
                flex: 1,
                borderWidth: 1,
                borderColor: '#c8e1ff',
                backgroundColor: '#fff',
                borderRadius: 10,
                paddingLeft: 10,
                color: "#000"
              }}
              value="Cash"
              textAlign={'left'}
              editable={false} selectTextOnFocus={false}
            />
          </View>

          {/* 5 */}
          <View style={{flex: 1, marginLeft: 30, marginRight: 30, marginBottom: 7}}>
            <Text style={{fontWeight: 'bold'}}>Prepayment</Text>
            <TextInput
              style={{
                flex: 1,
                borderWidth: 1,
                borderColor: '#c8e1ff',
                backgroundColor: '#fff',
                borderRadius: 10,
                paddingLeft: 10,
                color: "#000"
              }}
              value="20 $"
              textAlign={'left'}
              editable={false} selectTextOnFocus={false}
            />
          </View>

          {/* 6 */}
          <View style={{flex: 1, marginLeft: 30, marginRight: 30, marginBottom: 7}}>
            <Text style={{fontWeight: 'bold'}}>Amount to Pay</Text>
            <TextInput
              style={{
                flex: 1,
                borderWidth: 1,
                borderColor: '#c8e1ff',
                backgroundColor: '#fff',
                borderRadius: 10,
                paddingLeft: 10,
                color: "#000"
              }}
              value="2000 $"
              textAlign={'left'}
              editable={false} selectTextOnFocus={false}
            />
          </View>

          {/* 7 */}
          <View style={{flex: 1, marginLeft: 30, marginRight: 30, marginBottom: 7}}>
            <Text style={{fontWeight: 'bold'}}>Status</Text>
            <TextInput
              style={{
                flex: 1,
                borderWidth: 1,
                borderColor: '#c8e1ff',
                backgroundColor: '#fff',
                borderRadius: 10,
                paddingLeft: 10,
                color: "#000"
              }}
              value="Waiting to involce"
              textAlign={'left'}
              editable={false} selectTextOnFocus={false}
            />
          </View>

          {/* 8 */}
          <View style={{flex: 2, marginLeft: 30, marginRight: 30, marginBottom: 7}}>
            <Text style={{fontWeight: 'bold'}}>Note</Text>
            <TextInput
              style={{
                flex: 1,
                borderWidth: 1,
                borderColor: '#c8e1ff',
                backgroundColor: '#fff',
                borderRadius: 10,
                paddingLeft: 10,
                color: "#000"
              }}
              value="Giao hàng trong giờ hành chính"
              textAlign={'left'}
              multiline= {true}
              numberOfLines={3}
              editable={false} selectTextOnFocus={false}
            />
          </View>
        </View>

    );
  }
}
