/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
var { height, width } = Dimensions.get('window');
import avatar from '../image/avatar.png';
import cart from '../image/cart.png';
import logout from '../image/logout.png';
import password from '../image/password.png';
import * as RootNavigation from '../utils/RootNavigation';

export default class HelloUser extends Component {
  render() {
    const name = 'userName';
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={['#DD5E89', '#F7BB97']}
          style={styles.linearGradient}
        >
          <View style={styles.avaCont}>
            <Image source={avatar} style={styles.avatar} resizeMode="contain" />
          </View>
        </LinearGradient>
        <View style={styles.footer}>
          <View style={styles.optionCont}>
            <TouchableOpacity
              style={styles.Option}
              onPress={() => RootNavigation.navigate('Carts', null)}
            >
              <View style={styles.imgOptCont}>
                <Image source={cart} style={styles.icon} resizeMode="contain" />
              </View>
              <Text style={styles.optName}>Xem Giỏ Hàng</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.Option}
              onPress={() => {
                RootNavigation.navigate('s');
              }}
            >
              <View style={styles.imgOptCont}>
                <Image
                  source={password}
                  style={styles.icon}
                  resizeMode="contain"
                />
              </View>
              <Text style={styles.optName}>Đổi Mật Khẩu</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.Option}
              onPress={() => RootNavigation.navigate('Login', null)}
            >
              <View style={styles.imgOptCont}>
                <Image
                  source={logout}
                  style={styles.icon}
                  resizeMode="contain"
                />
              </View>
              <Text style={styles.optName}>Đăng Xuất</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.user}>
          <View style={styles.textForm}>
            <Text
              style={{
                letterSpacing: 1.5,
                fontSize: 25,
                color: '#000066',
                fontWeight: 'bold',
              }}
            >
              HELLO
            </Text>
            <Text
              style={{
                letterSpacing: 1.5,
                fontSize: 30,
                color: '#000066',
                fontWeight: 'bold',
              }}
            >
              {name}!
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  linearGradient: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  avaCont: {
    height: 120,
    width: 120,
    backgroundColor: 'white',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'white',
  },
  avatar: {
    width: 90,
  },

  footer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  optionCont: {
    flex: 1,
    width: '80%',
    paddingTop: width * 0.25,
  },

  Option: {
    flexDirection: 'row',
    height: 40,
    backgroundColor: 'white',
    marginBottom: 25,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    elevation: 5,
  },

  imgOptCont: {
    flex: 1,
    alignItems: 'center',
  },

  icon: {
    flex: 1,
    width: 30,
    height: 30,
  },

  optName: {
    flex: 2,
    fontSize: 18,
  },

  user: {
    width: width * 0.8,
    height: width * 0.4,
    backgroundColor: 'white',
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -width * 0.2,
    marginLeft: -width * 0.4,
    elevation: 3,
    borderRadius: 15,
  },
  textForm: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 30,
    fontFamily: 'Playfair Display',
  },
});
