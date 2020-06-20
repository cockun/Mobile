import React, { Component } from 'react';
import { Image, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import subHome from './subHome';
import Account from '../image/account.png';
import homeImg from '../image/Home.png';

import { actFetchCart } from '../actions/index';
import { connect } from 'react-redux';
import { Cart } from '../utils/cart';
import HelloUser from './helloUser';
const Tab = createBottomTabNavigator();

class Home extends Component {
  componentDidMount() {
    const asyncStore = async () => {
      let b = await Cart.getCart();
      this.props.fetchCart(b);
    };

    asyncStore();
  }
  render() {
    const User = (props) => (
      <HelloUser userName={this.props.route.params.userName} {...props} />
    );
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
        <Tab.Screen name="Tài Khoản" component={User} />
      </Tab.Navigator>
    );
  }
}

const styles = StyleSheet.create({});

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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
