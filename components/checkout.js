/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { Helper } from '../utils/helper';
import { callApi } from '../utils/apiCaller';
var today = new Date();
var date =
  today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
var time =
  today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
var dateTime = date + ' ' + time;
export default class CheckOut extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      name: '',
      phone: '',
      address: '',
    };
  }
  addBill = () => {
    if (
      this.state.name === '' ||
      this.state.phone === '' ||
      this.state.address === ''
    ) {
      Alert.alert('Bạn chưa nhập đủ thông tin. Xin kiểm tra lại!!!');
    } else {
      callApi('Bill', 'POST', {
        id: '',
        billinfo: {},
        total: this.props.route.params.total,
        date: dateTime,
        name: this.state.name,
        phone: this.state.phone,
        src: this.state.address,
      });
      Alert.alert(
        'Cảm ơn bạn đã ủng hộ Shop . Mong gặp lại bạn lần sau ahihihihihihi'
      );
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.header}>
            <Text
              style={{
                alignSelf: 'center',
                fontSize: 30,
                fontWeight: 'bold',
                color: 'white',
              }}
            >
              THANH TOÁN
            </Text>
          </View>
          <View style={styles.border1}>
            <View>
              <Text style={{ fontWeight: 'bold', fontSize: 20 }}>
                {' '}
                Tổng Tiền : {Helper.formatDollar(
                  this.props.route.params.total
                )}{' '}
                vnđ
              </Text>
            </View>
          </View>
          <Text style={styles.text}>Nhập thông tin </Text>
          <View style={styles.box}>
            <TextInput
              style={styles.border2}
              placeholder="Họ và tên"
              onChangeText={(value) =>
                this.setState({
                  name: value,
                })
              }
            />
            <TextInput
              style={styles.border2}
              placeholder="Số điện thoại"
              onChangeText={(value) =>
                this.setState({
                  phone: value,
                })
              }
            />
            <TextInput
              style={styles.border2}
              placeholder="Địa Chỉ"
              onChangeText={(value) =>
                this.setState({
                  address: value,
                })
              }
            />
          </View>
          <Text style={styles.text}>Chọn Phương thức thanh toán </Text>
          <View style={styles.payment}>
            <TouchableOpacity>
              <View style={styles.compo}>
                <Text style={{ padding: 15 }}>Shinhan</Text>
                <Image
                  style={styles.icon}
                  source={require('../image/avatar.png')}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.compo}>
                <Text style={{ padding: 15 }}>VietComBank</Text>
                <Image
                  style={styles.icon}
                  source={require('../image/avatar.png')}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.compo}>
                <Text style={{ padding: 15 }}>Argibank</Text>
                <Image
                  style={styles.icon}
                  source={require('../image/avatar.png')}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.compo}>
                <Text style={{ padding: 15 }}>MoMo</Text>
                <Image
                  style={styles.icon}
                  source={require('../image/avatar.png')}
                />
              </View>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={this.addBill}>
            <View style={styles.button}>
              <Text style={{ textAlign: 'center' }}> MUA HÀNG </Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {},
  header: {
    height: 150,
    backgroundColor: '#FF7F50',
    justifyContent: 'center',
  },
  border1: {
    height: 100,
    backgroundColor: 'white',
    paddingTop: 5,
    borderWidth: 1,
    justifyContent: 'center',
  },
  box: {
    height: 200,

    justifyContent: 'center',
    marginTop: 5,
  },
  border2: {
    height: 50,
    width: '80%',
    borderWidth: 1,
    alignSelf: 'center',
    paddingLeft: 15,
    marginTop: 15,
  },
  text: {
    paddingRight: '10%',
    paddingLeft: '10%',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 5,
  },
  payment: {
    height: 250,
    alignSelf: 'center',
    width: '80%',

    backgroundColor: 'white',
  },
  compo: {
    height: 50,
    elevation: 2,
    borderRadius: 100,
    flexDirection: 'row',
    alignItems: 'center',

    marginTop: 10,
  },
  icon: {
    marginLeft: 'auto',
    right: 15,
    height: 40,
    width: 40,
  },
  button: {
    marginTop: 30,
    height: 50,
    backgroundColor: 'lightblue',
    width: '80%',
    alignSelf: 'center',
    justifyContent: 'center',
  },
});
