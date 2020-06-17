import React, { Component } from 'react';
import { Image, Dimensions, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import subHome from './subHome';
import ID from './ID';
import Account from '../image/account.png';
import homeImg from '../image/Home.png';
import { callApi } from '../utils/apiCaller';
const Tab = createBottomTabNavigator();

class Home extends Component {
  componentDidMount() {
    callApi('Products/2', 'GET', null).then((res) => {
      this.setState(res);
    });
  }
  render() {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: () => {
            let urlImage;
            if (route.name === 'Trang Chủ') {
              urlImage = homeImg;
            } else if (route.name === 'Tài Khoản') {
              urlImage = Account;
            }

            // You can return any component that you like here!
            return (
              <Image source={urlImage} style={{ width: 20, height: 20 }} />
            );
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Trang Chủ" component={subHome} />
        <Tab.Screen name="Tài Khoản" component={ID} />
      </Tab.Navigator>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
});

export default Home;
