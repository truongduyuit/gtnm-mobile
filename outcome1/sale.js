import React, {Component, useState} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
  Image,
} from 'react-native';
import {Input, SearchBar, Icon, Button} from 'react-native-elements';
import {
  Modal,
  ModalContent,
  ModalTitle,
  ModalFooter,
  ModalButton,
} from 'react-native-modals';

const data = [
  {
    image: "1.jpg",
    name: "Apple Watch Pro",
    code: "SP01",
    type: "Xám, giới hạn",
    money: "2 500 000",
    amount: 10,
    selected: false
  },
  {
    image: "1.jpg",
    name: "Apple Watch Pro 2",
    code: "SP01",
    type: "Xám, giới hạn",
    money: "2 500 000",
    amount: 10,
    selected: false
  }
]
export default function Sale (props) {
  const [isOpenFilter, setIsOpenFilter] = useState (false);
  const [search, setSearch] = useState ('');
  const [enableKeyboard, setEnableKeyboard] = useState (true);
const [items, setItems] = useState(data)
  const updateItems = (code) => {
    let tempItems =[...items]
tempItems.map(item => {
  if (code === item.code) return item.selected = !item.selected
})
  setItems(tempItems)
  }
  const showItems = () => {
    return items.map((item, index)=> {
      const url = `../images/${item.image}`
      return <View key={index}
            style={{
              flex: 1,
              flexDirection: 'row',
              borderWidth: 1,
              borderColor: '#000',
              borderRadius: 10,
              height: 80,
              marginBottom: 5,
              backgroundColor: item.selected ? "#c8e1ff" : "#fff"
            }}
            onPress={() => updateItems(item.code)}
          >
            <View
              style={{
                flex: 2,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Image
                source={require ('../images/1.jpg')}
                style={{width: 50, height: 50}}
              />
            </View>

            <View
              style={{
                flex: 10,
                marginLeft: 15
              }}
            >
              <Text
                style={{
                  flex: 1,
                  fontWeight: 'bold',
                  paddingTop: 10,
                  fontSize: 16
                }}
              >
                {item.name}
              </Text>

              <Text
                style={{
                  flex: 1,
                  fontSize: 12,
                  color: "#aaa"
                }}
              >
                {item.type}
              </Text>

              <Text
                style={{
                  flex: 1
                }}
              >
                {item.code}
              </Text>
            </View>

            <View
              style={{
                flex: 3,
                alignItems: 'flex-end',
                paddingRight: 15
              }}
            >
              <Text
                style={{
                  flex: 2,
                  fontWeight: 'bold',
                  paddingTop: 10,
                  fontSize: 16
                }}
              >
                {item.money}
              </Text>
              <Text
                style={{
                  flex: 1
                }}
              >
                SL: {item.amount}
              </Text>
            </View>

          </View>
    })
  }

  return (
    <View
      style={{
        marginTop: 30,
        flex: 3,
      }}
    >
      {/* search */}
      <View
        style={{
          backgroundColor: '#fff',
          flex: 2,
          marginRight: 5,
        }}
      >
        <View
          style={{
            flex: 1,
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
              flex: 3,
              marginTop: 6,
              marginBottom: 6,
              paddingTop: 4,
              paddingLeft: 5,
              marginRight: search.length > 0 ? 0 : 5,
              borderTopRightRadius: search.length > 0 ? 0 : 10,
              borderBottomRightRadius: search.length > 0 ? 0 : 10,
            }}
            placeholder="Search..."
            onChangeText={text => setSearch (text) && setEnableKeyboard (false)}
            value={search}
            onPress={() => setEnableKeyboard (false)}
            underlineColorAndroid="transparent"
          />
          {/* Button mic */}
          <Button
            style={{
              flex: 1,
              paddingTop: 3,
              borderRadius: 3,
              margin: 5,
            }}
            icon={<Icon name="ios-mic" type="ionicon" color="#000" />}
            title=""
            type="clear"
            onPress={() => setIsOpenFilter (true)}
          />

          {/* Button add */}
          <Button
            style={{
              flex: 1,
              paddingTop: 3,
              borderRadius: 3,
              margin: 5,
            }}
            icon={<Icon name="ios-add" type="ionicon" color="#000" />}
            title=""
            type="clear"
            onPress={() => setIsOpenFilter (true)}
          />

          {/* Button 3| */}
          <Button
            style={{
              flex: 1,
              paddingTop: 3,
              borderRadius: 3,
              margin: 5,
            }}
            icon={<Icon name="ios-reorder" type="ionicon" color="#000" />}
            title=""
            type="clear"
            onPress={() => setIsOpenFilter (true)}
          />
        </View>

      </View>

      {/* select multi */}
      <View
        style={{
          backgroundColor: 'blue',
          flex: 2,
          flexDirection: 'row',
          backgroundColor: '#fff',
          borderWidth: 1,
          borderColor: '#000',
        }}
      >
        {/* Button list */}
        <View
          style={{
            flex: 3,
            borderRadius: 3,
            margin: 5,
            alignItems: 'flex-start',
          }}
        >
          <Button
            icon={<Icon name="ios-list" type="ionicon" color="#000" />}
            title=""
            type="clear"
            onPress={() => setIsOpenFilter (true)}
          />
        </View>

        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            paddingRight: 5,
          }}
        >
          <Button
            icon={<Icon name="ios-checkmark" type="ionicon" color="#000" />}
            title=""
            type="clear"
            onPress={() => setIsOpenFilter (true)}
          />
          <Text>Chọn nhiều</Text>
        </View>
      </View>

      {/* item */}
      <View
        style={{
          flex: 21,
          marginTop: 5,
        }}
      >
        <ScrollView>
          {showItems()}
        </ScrollView>
      </View>

      {/* button */}
      <View
        style={{
          flex: 3,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Button
          title="Bán hàng"
          type="clear"
          onPress={() => props.handlerScreen("Bill")}
          color="#fff"
          containerStyle={{
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
            borderWidth: 1,
            borderColor: '#000',
            paddingTop: 18,
            paddingBottom: 18,
          }}
          titleStyle={{
            color: '#000',
          }}
        />

        <Button
          title="Đơn tạm"
          type="clear"
          onPress={() => props.handlerScreen("Bill")}
          color="#fff"
          containerStyle={{
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
            borderWidth: 1,
            borderColor: '#000',
            paddingTop: 18,
            paddingBottom: 18,
          }}
          titleStyle={{
            color: '#000',
          }}
        />

        <Button
          title="Lịch sử"
          type="clear"
          onPress={() => props.handlerScreen("Bill")}
          color="#fff"
          containerStyle={{
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
            borderWidth: 1,
            borderColor: '#000',
            paddingTop: 18,
            paddingBottom: 18,
          }}
          titleStyle={{
            color: '#000',
          }}
        />

        <Button
          title="Thêm"
          type="clear"
          onPress={() => props.handlerScreen("Bill")}
          color="#fff"
          containerStyle={{
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
            borderWidth: 1,
            borderColor: '#000',
            paddingTop: 18,
            paddingBottom: 18,
          }}
          titleStyle={{
            color: '#000',
          }}
        />
      </View>
    </View>
  );
}
