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
  Dimensions,
  Picker,
} from 'react-native';
import {Input, SearchBar, Icon} from 'react-native-elements';
import {
  Table,
  Row,
  Rows,
  TableWrapper,
  Cell,
} from 'react-native-table-component';
import DatePicker from 'react-native-datepicker';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';

const data = {
  tableHead: [
    'Id',
    'Nơi sản xuất',
    'Khách hàng',
    'Cty vận chuyển',
    'Số Lượng',
    'Số tiền',
  ],
  tableData: [
    ['IT001', 'Noo PT', 'Trường Duy', 'Đa cấp', 1, '2000 $'],
    ['IT001', 'Noo PT', 'Trường Duy', 'Đa cấp', 1, '2000 $'],
  ],
};

// showBeginDateTimePicker = () => {
//   this.setState({ isDateTimePickerVisible: true });
// };

// hideDateTimePicker = () => {
//   this.setState({ isDateTimePickerVisible: false });
// };

// handleDatePicked = date => {
//   console.log("A date has been picked: ", date);
//   this.hideDateTimePicker();
// };

export default function StatisticalScreen (props) {
  const [selectedValue, setSelectedValue] = useState ('VNĐ');
  const [screen, setScreen] = useState ('info');
  const [beginDate, setBeginDate] = useState ('');
  const [endDate, setEndDate] = useState ('');

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
          <Text
            onPress={() => props.handler ('List')}
            style={{color: 'blue', padding: 5, fontSize: 20}}
          >
            Back
          </Text>
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
            Thống kê
          </Text>
        </View>
      </View>

      <View style={{flex: 1, flexDirection: 'row', marginTop: 10}}>
        <View style={{flex: 1}}>
          <Button
            title="Thông tin chung"
            containerStyle={{
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#00CCCC',
              borderRadius: 15,
            }}
            titleStyle={{
              color: '#fff',
            }}
            color={screen === 'info' ? '#00CCCC' : '#ccc'}
            onPress={() => setScreen ('info')}
          />

        </View>

        <View style={{flex: 1}}>
          <Button
            title="Biểu đồ"
            containerStyle={{
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#00CCCC',
              borderRadius: 15,
            }}
            titleStyle={{
              color: '#fff',
            }}
            color={screen === 'chart' ? '#00CCCC' : '#ccc'}
            onPress={() => setScreen ('chart')}
          />
        </View>
      </View>

      {screen === 'info'
        ? <View style={{flex: 12}}>
            <View style={{flex: 6}}>
              <Text style={{fontWeight: 'bold', fontSize: 16}}>
                Thông tin sản phẩm
              </Text>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <View
                  style={{
                    flex: 4,
                    borderWidth: 1,
                    borderColor: '#c8e1ff',
                    paddingLeft: 5,
                    paddingRight: 5,
                  }}
                >
                  <TextInput
                    style={{
                      borderWidth: 1,
                      borderColor: '#c8e1ff',
                      backgroundColor: '#fff',
                      borderRadius: 10,
                      paddingLeft: 10,
                      color: '#000',
                      marginTop: 13,
                    }}
                    textAlign={'left'}
                    placeholder="*Tên sản phẩm"
                  />

                  <TextInput
                    style={{
                      borderWidth: 1,
                      borderColor: '#c8e1ff',
                      backgroundColor: '#fff',
                      borderRadius: 10,
                      paddingLeft: 10,
                      color: '#000',
                      marginTop: 13,
                    }}
                    textAlign={'left'}
                    placeholder="*Nơi sản xuất"
                  />

                  <TextInput
                    style={{
                      borderWidth: 1,
                      borderColor: '#c8e1ff',
                      backgroundColor: '#fff',
                      borderRadius: 10,
                      paddingLeft: 10,
                      color: '#000',
                      marginTop: 13,
                    }}
                    textAlign={'left'}
                    placeholder="*Ngày sản xuất"
                  />

                  <TextInput
                    style={{
                      borderWidth: 1,
                      borderColor: '#c8e1ff',
                      backgroundColor: '#fff',
                      borderRadius: 10,
                      paddingLeft: 10,
                      color: '#000',
                      marginTop: 13,
                    }}
                    textAlign={'left'}
                    placeholder="*Tên khách hàng"
                  />

                  <TextInput
                    style={{
                      borderWidth: 1,
                      borderColor: '#c8e1ff',
                      backgroundColor: '#fff',
                      borderRadius: 10,
                      paddingLeft: 10,
                      color: '#000',
                      marginTop: 13,
                    }}
                    textAlign={'left'}
                    placeholder="*Công ty vận chuyển"
                  />

                  <TextInput
                    style={{
                      borderWidth: 1,
                      borderColor: '#c8e1ff',
                      backgroundColor: '#fff',
                      borderRadius: 10,
                      paddingLeft: 10,
                      color: '#000',
                      marginTop: 13,
                    }}
                    textAlign={'left'}
                    placeholder="*Ngày mua hàng"
                  />
                </View>

                <View
                  style={{
                    flex: 3,
                    paddingLeft: 15,
                    paddingRight: 15,
                    justifyContent: 'space-around',
                  }}
                >
                  <Text style={{fontWeight: 'bold', fontSize: 16}}>
                    Ngày bắt đầu
                  </Text>

                  <DatePicker
                    style={{width: 150}}
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

                  <Text style={{fontWeight: 'bold', fontSize: 16}}>
                    Ngày kết thúc
                  </Text>

                  <DatePicker
                    style={{width: 150}}
                    date={endDate}
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
                    onDateChange={date => setEndDate (date)}
                  />
                  <Button
                    title="Thống kê"
                    containerStyle={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      backgroundColor: '#00CCCC',
                      borderRadius: 10,
                    }}
                    titleStyle={{
                      color: '#fff',
                    }}
                  />

                  <Button
                    title="Hủy"
                    containerStyle={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      backgroundColor: '#00CCCC',
                      borderRadius: 10,
                    }}
                    titleStyle={{
                      color: '#fff',
                    }}
                  />
                </View>
              </View>

              {/* <TabView
          navigationState={{index, routes}}
          renderScene={renderScene}
          onIndexChange={setIndex}
        //   initialLayout={initialLayout}
          style= {{flex: 1}}
        /> */}
            </View>

            <View style={{flex: 6}}>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  marginTop: 15,
                }}
              >
                <Text style={{fontWeight: 'bold', fontSize: 16}}>
                  Tổng tiền
                </Text>
                <TextInput
                  style={{
                    borderWidth: 1,
                    borderColor: '#c8e1ff',
                    backgroundColor: '#fff',
                    color: '#000',
                    width: 100,
                    height: 30,
                  }}
                  textAlign={'left'}
                />
                <Picker
                  selectedValue={selectedValue}
                  style={{height: 30, width: 100}}
                  onValueChange={(itemValue, itemIndex) =>
                    setSelectedValue (itemValue)}
                >
                  <Picker.Item label="VNĐ" value="VNĐ" />
                  <Picker.Item label="$" value="$" />
                </Picker>
              </View>
              <View style={{flex: 5}}>
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
                            data={cellData}
                            onPress={() =>
                              setIsOpenFilterModal (!isOpenFilterModal)}
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
            </View>
          </View>
        : <View style={{flex: 12}}>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 20,
                marginBottom: 5,
                marginTop: 5,
              }}
            >
              Thống kê doanh thu
            </Text>
            <LineChart
              data={{
                labels: [
                  'Jan',
                  'Feb',
                  'Mar',
                  'Apr',
                  'May',
                  'Jun',
                ],
                datasets: [
                  {
                    data: [
                      Math.random () * 10000,
                      Math.random () * 10000,
                      Math.random () * 10000,
                      Math.random () * 10000,
                      Math.random () * 10000,
                      Math.random () * 10000,
                      Math.random () * 10000,
                      Math.random () * 10000,
                    ],
                  },
                ],
              }}
              width={Dimensions.get ('window').width} // from react-native
              height={Dimensions.get ('window').height * 2 / 3}
              yAxisLabel={'$'}
              chartConfig={{
                backgroundColor: '#1cc910',
                backgroundGradientFrom: '#eff3ff',
                backgroundGradientTo: '#efefef',
                decimalPlaces: 2, // optional, defaults to 2dp
                color: (opacity = 255) => `rgba(0, 0, 0, ${opacity})`,
                style: {
                  borderRadius: 16,
                },
              }}
              bezier
              style={{
                marginVertical: 8,
                borderRadius: 16,
              }}
            />
          </View>}

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
