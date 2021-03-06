import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import ProductCart from './productCart';
import { actFetchCart } from '../actions/index';
import { connect } from 'react-redux';
import { Cart } from '../utils/cart';
import { Helper } from '../utils/helper';
import * as RootNavigation from '../utils/RootNavigation';

export class Carts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
    };
  }

  asyncStore = async () => {
    let b = await Cart.getCart();
    this.props.fetchCart(b);
  };

  render() {
    var total = 0;
    this.props.cart.map((item) => {
      total += item.quantity * item.pirce2;
    });
    return (
      <LinearGradient
        colors={['#ffffff', '#ffffff']}
        style={styles.linearGradient}
      >
        <View style={styles.title}>
          <View style={styles.border}>
            <Text style={{ fontSize: 30, color: '#3366ff' }}>Giỏ Hàng</Text>
          </View>
        </View>

        <View style={styles.list}>
          <ScrollView>
            {this.props.cart.map((item) => {
              return (
                <ProductCart
                  reLoad={this.asyncStore}
                  data={item}
                  key={item.id}
                />
              );
            })}
          </ScrollView>
        </View>

        <View style={styles.checkout}>
          <View style={styles.totalCont}>
            <Text style={{ fontSize: 15 }}>Tổng Cộng:</Text>
            <Text style={styles.total}>{Helper.formatDollar(total)}</Text>
          </View>
          <TouchableOpacity
            onPress={() =>
              RootNavigation.navigate('Checkout', {
                total: total,
              })
            }
            style={styles.ibutton}
          >
            <Text style={styles.textButton}>THANH TOÁN</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
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

export default connect(mapStateToProps, mapDispatchToProps)(Carts);

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    fontFamily: 'Lato',
  },

  title: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  border: {
    width: '80%',
    borderBottomWidth: 1,
    borderBottomColor: '#a2a276',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 20,
  },

  list: {
    flex: 4,
  },
  checkout: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  ibutton: {
    flex: 1,
    height: 60,
    backgroundColor: '#9f9fdf',
    borderRadius: 10,
    borderColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textButton: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  totalCont: {
    flex: 1,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'pink',
    borderRadius: 10,
  },
  total: {
    fontSize: 20,
  },
});
