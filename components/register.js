/* eslint-disable radix */
import LinearGradient from 'react-native-linear-gradient';
import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { callApi } from '../utils/apiCaller';
import * as RootNavigation from '../utils/RootNavigation';

// Within your render function
export default class Register extends Component {
  constructor(props) {
    super();
    this.state = {
      name: '',
      pass: '',
      pass2: '',
    };
    this.add = this.add.bind(this);
  }
  async add() {
    if (this.state.name !== '' && this.state.pass !== '') {
      let resp = await fetch(
        'https://5ee5aa77ddcea00016a37721.mockapi.io/Account'
      );
      let respJson = await resp.json();

      this.setState({ data: respJson });

      let a = parseInt(respJson.length);
      let jus = 1;
      for (var i = 0; i < a; i++) {
        if (String(this.state.name) == String(respJson[i].name)) {
          Alert.alert('Tên tài khoản đã tồn tại');
          jus = 0;
          break;
        }
      }
      if (jus === 1) {
        if (String(this.state.pass) === String(this.state.pass2)) {
          callApi('Account', 'POST', {
            id: '',
            name: this.state.name,
            password: this.state.pass,
          });
          Alert.alert('Đăng ký thành công');
          RootNavigation.navigate('Login', null);
        }
      } else {
        if (String(this.state.pass) !== String(this.state.pass2)) {
          Alert.alert('Mật khẩu nhập lại không đúng');
        }
      }
    } else {
      Alert.alert('Vui lòng nhập đầy đủ thông tin!!!');
    }
  }

  render() {
    return (
      <LinearGradient
        colors={['#FFAF7B', '#D76D77', '#3A1C71']}
        style={styles.linearGradient}
      >
        <View style={styles.logo}>
          <Image source={require('../image/avatar.png')} style={styles.image} />
        </View>

        <View style={styles.form}>
          <TextInput
            style={styles.info}
            placeholder="Tài Khoản"
            placeholderTextColor={'rgba(255, 255, 255, 0.6)'}
            value={String(this.state.name)}
            onChangeText={(value2) => this.setState({ name: value2 })}
          />
          <TextInput
            style={styles.info}
            placeholder="Mật Khẩu"
            placeholderTextColor={'rgba(255, 255, 255, 0.6)'}
            value={String(this.state.pass)}
            secureTextEntry={true}
            onChangeText={(value2) => this.setState({ pass: value2 })}
          />
          <TextInput
            style={styles.info}
            placeholder="Nhập Lại Mật Khẩu"
            placeholderTextColor={'rgba(255, 255, 255, 0.6)'}
            value={String(this.state.pass2)}
            secureTextEntry={true}
            onChangeText={(value2) => this.setState({ pass2: value2 })}
          />
        </View>
        <View style={styles.button}>
          <TouchableOpacity style={styles.ibutton} onPress={this.add}>
            <Text style={styles.text}>Đăng Ký</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    );
  }
}

// Later on in your styles..
var styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    fontFamily: 'Lato',
  },

  form: {
    flex: 2,
  },

  logo: {
    flex: 2,

    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    width: 150,
    height: 150,
  },

  info: {
    borderBottomColor: 'rgba(255, 255, 255, 0.6)',
    borderBottomWidth: 1,
    marginBottom: 30,
    fontSize: 20,
  },

  button: {
    flex: 1,
    alignItems: 'center',
  },

  ibutton: {
    width: '80%',
    height: 80,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    borderRadius: 30,
    borderColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },

  text: {
    color: 'white',
    fontSize: 20,
  },
});
