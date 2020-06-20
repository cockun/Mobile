import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import OptionID from './optionID';
import cart from '../image/cart.png';
import user from '../image/user.png';
import logout from '../image/logout.png';
import password from '../image/password.png';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  Info: {
    flex: 1,
    backgroundColor: 'lightblue',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  avatarCont: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },

  avatar: {
    height: 60,
    width: 60,
    backgroundColor: 'white',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },

  userName: {
    flex: 8,
    fontSize: 25,
    fontWeight: 'bold',
  },

  Image: {
    width: 40,
    height: 40,
  },

  Action: {
    flex: 4,
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  second1: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    borderBottomWidth: 1,
  },

  pic: {
    width: '25%',
    height: '100%',
    justifyContent: 'center',
  },
  icon1: {
    width: 35,
    height: 35,
    alignSelf: 'center',
  },
});

export default class ID extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.Info}>
          <View style={styles.avatarCont}>
            <View style={styles.avatar}>
              <Image source={user} style={styles.Image} />
            </View>
          </View>
          <Text style={styles.userName}>o 14 NovemBer o</Text>
        </View>
        <View style={styles.second1}>
          <View style={styles.pic}>
            <Image style={styles.icon1} source={cart} />
            <Text style={{ alignSelf: 'center' }}> Chờ xác nhận</Text>
          </View>
          <View style={styles.pic}>
            <Image style={styles.icon1} source={cart} />
            <Text style={{ alignSelf: 'center' }}> Chờ lấy hàng</Text>
          </View>
          <View style={styles.pic}>
            <Image style={styles.icon1} source={cart} />
            <Text style={{ alignSelf: 'center' }}> Đang giao </Text>
          </View>
          <View style={styles.pic}>
            <Image style={styles.icon1} source={cart} />
            <Text style={{ alignSelf: 'center' }}> Đánh giá</Text>
          </View>
        </View>
        <View style={styles.Action}>
          <OptionID img={cart} title="Xem Đơn Hàng" />
          <OptionID img={password} title="Thay đổi mật khẩu" />
          <OptionID img={logout} title="Đăng Xuất" />
        </View>
      </View>
    );
  }
}
