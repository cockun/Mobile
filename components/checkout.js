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
import { Cart } from '../utils/cart';
import { actFetchCart } from '../actions/index';
import { connect } from 'react-redux';

import * as RootNavigation from '../utils/RootNavigation';
var today = new Date();
var date =
  today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
var time =
  today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
var dateTime = date + ' ' + time;
export class App extends Component {
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
      this.state.name == '' ||
      this.state.phone == '' ||
      this.state.address == ''
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
      Cart.clearCart();
      this.props.fetchCart([]);
      Alert.alert('Cảm ơn bạn đã ủng hộ Shop !!!');
      RootNavigation.navigate('Home');
    }
  };
  render() {
    return (
      <View style={styles.container}>
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
              Tổng Tiền : {Helper.formatDollar(this.props.route.params.total)}
              vnđ
            </Text>
          </View>
        </View>

        <View style={styles.box}>
          <Text style={styles.text}>Nhập thông tin </Text>
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

          <TouchableOpacity onPress={this.addBill}>
            <View style={styles.button}>
              <Text style={{ textAlign: 'center' }}> MUA HÀNG </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchCart: (cart) => {
      dispatch(actFetchCart(cart));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 2,

    backgroundColor: '#FF7F50',
    justifyContent: 'center',
  },
  border1: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 5,
    borderBottomWidth: 0.5,
    justifyContent: 'center',
  },
  box: {
    flex: 6,
    height: 200,
    alignItems: 'center',
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
    width: 200,
    alignSelf: 'center',
    justifyContent: 'center',
  },
});
