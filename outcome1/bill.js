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

export default function Bill (props) {
  const [isOpenFilter, setIsOpenFilter] = useState (false);
  const [search, setSearch] = useState ('');
  const [enableKeyboard, setEnableKeyboard] = useState (true);

  return (
    <View
      style={{
        marginTop: 30,
        flex: 3,
      }}
    >
      {/* header */}
      <View
        style={{
          backgroundColor: '#fff',
          flex: 2,
          flexDirection: 'row',
          marginRight: 5,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Button
          icon={<Icon name="ios-close" type="ionicon" size={50} color="#000" />}
          type="clear"
          style={{flex: 1}}
          onPress={() => props.handlerScreen("List")}
        />
        <Text
          style={{
            flex: 5,
            fontWeight: 'bold',
            fontSize: 18,
            textAlign: 'center',
          }}
        >
          Đơn hàng 1
        </Text>
      </View>

      {/* search */}
      <View
        style={{
          backgroundColor: '#fff',
          flex: 2,
          borderWidth: 1,
          borderColor: '#000',
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
            color="#000"
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
            placeholder="Tìm và thêm hàng"
            onChangeText={text => setSearch (text) && setEnableKeyboard (false)}
            value={search}
            onPress={() => setEnableKeyboard (false)}
            underlineColorAndroid="transparent"
          />
        </View>

      </View>

      {/* customer */}
      <View
        style={{
          flex: 4,
          flexDirection: 'row',
          borderWidth: 1,
          borderColor: '#000',
          borderRadius: 10,
          height: 80,
          marginTop: 5,
          marginBottom: 10
        }}
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
            marginLeft: 15,
          }}
        >
          <Text
            style={{
              flex: 1,
              fontWeight: 'bold',
              paddingTop: 10,
              fontSize: 16,
            }}
          >
            Trường Duy
          </Text>

          <Text
            style={{
              flex: 1,
              fontSize: 16,
            }}
          >
            034 2525 000
          </Text>
        </View>

        <View style={{flex: 3, justifyContent: 'center', alignItems: 'center'}}>
          <Button
            icon={
                <Icon name="chevron-right" type="evilicon" color="#000" size={70} />
            }
            type="clear"
          />
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
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              borderWidth: 1,
              borderColor: '#000',
              borderRadius: 10,
              height: 80,
            }}
          >
            <View
              style={{
                flex: 10,
                marginLeft: 15,
              }}
            >
              <Text
                style={{
                  flex: 1,
                  fontWeight: 'bold',
                  paddingTop: 10,
                  fontSize: 16,
                }}
              >
                Opple Watch Pro
              </Text>

              <Text
                style={{
                  flex: 1,
                  fontSize: 12,
                  color: '#aaa',
                }}
              >
                Xám, giới hạn
              </Text>

              <Text
                style={{
                  flex: 1,
                }}
              >
                SP01
              </Text>
            </View>

            <View
              style={{
                flex: 3,
                alignItems: 'flex-end',
                paddingRight: 15,
              }}
            >
              <Text
                style={{
                  flex: 2,
                  fontWeight: 'bold',
                  paddingTop: 10,
                  marginRight: 10,
                  fontSize: 16,
                }}
              >
                2 500 000
              </Text>
              <View
                style={{
                  flex: 2,
                  flexDirection: 'row',
                  justifyContent: 'center',
                }}
              >
                <Button
                  icon={
                    <Icon
                      name="ios-remove"
                      type="ionicon"
                      size={20}
                      color="#537372"
                    />
                  }
                  type="clear"
                />
                <Text
                  style={{
                    fontSize: 20,
                    marginLeft: 10,
                    marginRight: 10,
                  }}
                >
                  1
                </Text>
                <Button
                  icon={
                    <Icon
                      name="ios-add"
                      type="ionicon"
                      size={20}
                      color="#537372"
                    />
                  }
                  type="clear"
                />
              </View>

            </View>

          </View>

        </ScrollView>
      </View>

      {/* bill */}
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
        {/* select multi */}
        <View
          style={{
            backgroundColor: 'blue',
            flex: 2,
            flexDirection: 'row',
            backgroundColor: '#fff',
            borderWidth: 1,
            borderColor: '#000',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text
            style={{
              flex: 1,
              fontWeight: 'bold',
              fontSize: 16,
              paddingLeft: 5,
            }}
          >
            Số lượng: 3
          </Text>
          <Text
            style={{
              flex: 1,
              fontWeight: 'bold',
              fontSize: 16,
            }}
          >
            Tổng hàng: 10 500 000
          </Text>
        </View>

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
          title="Đặt hàng"
          type="clear"
          onPress={() => props.handlerScreen("Sale")}
          color="#fff"
          containerStyle={{
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
            borderWidth: 1,
            borderColor: '#000',
            paddingTop: 18,
            paddingBottom: 18,
            backgroundColor: '#00C8F8',
          }}
          titleStyle={{
            color: '#fff',
          }}
        />

        <Button
          title="Thanh toán"
          type="clear"
          onPress={() => props.handlerScreen("Sale")}
          containerStyle={{
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
            borderWidth: 1,
            borderColor: '#000',
            paddingTop: 18,
            paddingBottom: 18,
            backgroundColor: '#009E0F',
          }}
          titleStyle={{
            color: '#fff',
          }}
        />
      </View>
    </View>
  );
}
