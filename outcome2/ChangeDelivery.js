import React, { Component, useState } from 'react'
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
import DatePicker from 'react-native-datepicker';
import { Dimensions } from 'react-native';
import {
  Modal,
  ModalContent,
  ModalTitle,
  ModalFooter,
  ModalButton,
} from 'react-native-modals';

const windowWidth = Dimensions.get('window').width;
let today = Date.now();
var date = new Date().getDate(); //To get the Current Date
var month = new Date().getMonth() + 1; //To get the Current Month
var year = new Date().getFullYear(); //To get the Current Year

function ModalMessage (props) {
  return (
    <Modal
      visible={props.visible}
      onTouchOutside={() => props.handlerPress (false)}
      modalTitle={<ModalTitle title={props.message} />}
      footer={
        <ModalFooter>
          <ModalButton text="OK" onPress={() => props.handlerPress(false)} />
        </ModalFooter>
      }
    >
    </Modal>
  );
}

export default function ChangeDelivery (props) {
    const [type, setType] = useState (props.type);
    const [beginDate, setBeginDate] = useState (date);
    const [isOpenModal, setIsOpenModal] = useState (false);
    const [message, setMessage] = useState("")
    const [currAddress, setCurrAddress] = useState("Huyện Cẩm mỹ - Tỉnh đồng Nai")

    const updatePress = () => {
        setIsOpenModal(true)
        type === "time" ?
            setMessage("Cập nhật thời gian vận chuyển mới thành công !") :
            setMessage("Cập nhật địa chỉ giao hàng mới thành công !")
    }

    return (
        <View style={{flex: 1, backgroundColor: "#E7FEFF"}}>
            <View
                style={{
                flex: 1,
                flexDirection: 'row',
                marginTop: 20,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
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
                    <Text onPress = {() => props.handlerScreen("List")} style={{color: 'blue', padding: 5, fontSize: 20}}>
                        Back
                    </Text>
                </View>
                <View
                    style={{
                        flex: 3,
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
                    Update Information Delivery
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
                }}
                >
                <Button
                    title="Địa chỉ"
                    buttonStyle={{
                        backgroundColor: type === 'time' ? '#5699D0' : '#fff',
                        borderWidth: 1
                    }}
                    titleStyle={{
                        color: type === 'time' ? '#fff' : '#5699D0',
                    }}
                    onPress={() => setType('time')}
                />
                </View>
                <View
                    style={{
                        width: 100,
                    }}
                >
                <Button
                    title="Thời gian"
                    buttonStyle={{
                        backgroundColor: type === 'place' ? '#5699D0' : '#fff',
                        borderWidth: 1
                    }}
                    titleStyle={{
                        color: type === 'place' ? '#fff' : '#5699D0',
                    }}
                    onPress={() => setType ('place')}
                />
                </View>

            </View>

            {
                type === "time" ?
                <View style={{flex: 5}}>
                    <View style={{
                        height: 300,
                        backgroundColor: "#C9F1FD",
                    }}>
                        <Text style={{
                            marginLeft: 20,
                            marginTop: 10,
                            fontSize: 16,
                            fontWeight: "bold"
                        }}>Địa chỉ hiện tại:</Text>
                        <TextInput
                            style={{
                                borderWidth: 1,
                                borderColor: '#c8e1ff',
                                backgroundColor: '#eee',
                                paddingLeft: 10,
                                color: "#000",
                                marginLeft: 20,
                                marginRight: 20,
                                marginTop: 10,
                                fontSize: 14
                            }}
                        value="Huyện Cẩm mỹ - Tỉnh đồng Nai"
                        textAlign={'left'}
                        multiline= {true}
                        numberOfLines={3}
                        editable={false}
                        />

                        <Icon name="ios-swap" size={50} type="ionicon" color="blue" style={{marginTop: 20, transform: [{ rotate: '90deg'}]}}/>

                        <Text style={{
                            marginLeft: 20,
                            marginTop: 10,
                            fontSize: 16,
                            fontWeight: "bold"
                        }}>Địa chỉ mới</Text>
                        <TextInput
                            style={{
                                borderWidth: 1,
                                borderColor: '#c8e1ff',
                                backgroundColor: '#fff',
                                paddingLeft: 10,
                                color: "#000",
                                marginLeft: 20,
                                marginRight: 20,
                                marginTop: 10
                            }}
                        value={currAddress}
                        onChangeText= {(e) => setCurrAddress(e)}
                        textAlign={'left'}
                        multiline= {true}
                        numberOfLines={3}
                        />
                    </View>
                    <View style={{
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    marginRight: 20
                }}>
                    <View style={{width: 150, marginTop: 15, borderWidth: 2, borderColor: "#c8e1ff"}}>
                        <Button title="Cập nhật" color="#fff" type="outline" onPress={() => updatePress()}/>
                    </View>
                </View>
                </View>:
                <View style={{flex: 5}}>
                    <View style={{
                        height: 300,
                        backgroundColor: "#C9F1FD",
                    }}>
                        <Text style={{
                            marginLeft: 20,
                            marginTop: 10,
                            fontSize: 16,
                            fontWeight: "bold"
                        }}>Thời gian hiện tại:</Text>
                        <DatePicker
                            style={{width: 250, marginTop: 10, marginLeft: (windowWidth-250)/2}}
                            date={"20-08-2020"}
                            mode="date"
                            placeholder="DD-MM-YY"
                            format="DD-MM-YYYY"
                            minDate="01-01-1499"
                            maxDate="01-01-2499"
                            confirmBtnText="OK"
                            cancelBtnText="Cancel"
                            customStyles={{
                            dateIcon: {
                                position: 'absolute',
                                left: 0,
                                top: 4,
                                marginLeft: 0,
                            },
                            dateInput: {
                                //marginLeft: 36,
                            },
                            // ... You can check the source to find the other keys.
                            }}
                            onDateChange={date => setBeginDate (date)}
                            disabled
                        />

                        <Icon name="ios-swap" size={50} type="ionicon" color="blue" style={{marginTop: 20, transform: [{ rotate: '90deg'}]}}/>

                        <Text style={{
                            marginLeft: 20,
                            marginTop: 10,
                            fontSize: 16,
                            fontWeight: "bold"
                        }}>Thời gian mới</Text>
                        <DatePicker
                            style={{width: 250, marginTop: 10, marginLeft: (windowWidth-250)/2, backgroundColor: "#fff"}}
                            date={beginDate}
                            mode="date"
                            placeholder="DD-MM-YY"
                            format="DD-MM-YYYY"
                            minDate="01-01-1499"
                            maxDate="01-01-2499"
                            confirmBtnText="OK"
                            cancelBtnText="Cancel"
                            customStyles={{
                            dateIcon: {
                                position: 'absolute',
                                left: 0,
                                top: 4,
                                marginLeft: 0,
                            },
                            dateInput: {
                                //marginLeft: 36,
                            },
                            // ... You can check the source to find the other keys.
                            }}
                            onDateChange={date => setBeginDate (date)}
                        />
                    </View>
                    <View style={{
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    marginRight: 20
                }}>
                    <View style={{width: 150, marginTop: 15, borderWidth: 2, borderColor: "#c8e1ff"}}>
                        <Button title="Cập nhật" color="#fff" type="outline" onPress={() => updatePress()}/>
                    </View>
                </View>
                </View>
            }

        <ModalMessage
                visible={isOpenModal}
                handlerPress={value => setIsOpenModal(value)}
                message = {message}
            />
        </View>
    )
}
