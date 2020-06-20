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
import * as RootNavigation from '../utils/RootNavigation';

// Within your render function
export default class Login extends Component {
  constructor(props) {
    super();
    this.state = {
      data: [],
      name: '',
      pass: '',
    };
    this.check = this.check.bind(this);
  }
  async check() {
    let resp = await fetch(
      'https://5ee5aa77ddcea00016a37721.mockapi.io/Account'
    );
    let respJson = await resp.json();
    this.setState({ data: respJson });
    let a = parseInt(respJson.length);
    let b = 0;

    for (var i = 0; i < a; i++) {
      if (
        String(respJson[i].name) == String(this.state.name) &&
        String(respJson[i].password) == String(this.state.pass)
      ) {
        Alert.alert('Đăng nhập thành công');

        RootNavigation.navigate('Home', { userName: this.state.name });
        this.setState({
          name: '',
          pass: '',
        });
        break;
      }
      if (i == a - 1) {
        Alert.alert('Sai tài khoản hoặc mật khẩu');
        break;
      }
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
            secureTextEntry={true}
            value={String(this.state.pass)}
            onChangeText={(value2) => this.setState({ pass: value2 })}
          />
        </View>
        <View style={styles.button}>
          <TouchableOpacity style={styles.ibutton} onPress={this.check}>
            <Text style={styles.text}>Đăng Nhập</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.ibutton}
            onPress={() => RootNavigation.navigate('Register', null)}
          >
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
    flex: 1,
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
    flex: 2,

    alignItems: 'center',
    justifyContent: 'center',
  },

  ibutton: {
    width: '80%',
    height: 60,
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
