import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import imgDel from '../image/delete.png';

import { Cart } from '../utils/cart';
import { actFetchCart } from '../actions/index';
import { connect } from 'react-redux';
import { Helper } from '../utils/helper';

export class ProductCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: props.data.quantity,
    };
  }
  deleteItem = async () => {
    let a = this.props.data;
    const tmp = await Cart.deleteCartItem(a);
    this.props.fetchCart(tmp);
    console.log(tmp);
  };
  upQuantity = async () => {
    await this.setState({
      ...this.state,
      quantity: this.state.quantity + 1,
    });

    let a = await this.props.data;
    let b = await this.state.quantity;
    const tmp = await Cart.updateCart({
      ...a,
      quantity: b,
    });

    this.props.fetchCart(tmp);
  };
  downQuantity = async () => {
    if (this.state.quantity > 1) {
      await this.setState({
        ...this.state,
        quantity: this.state.quantity - 1,
      });

      let a = await this.props.data;
      let b = await this.state.quantity;
      const tmp = await Cart.updateCart({
        ...a,
        quantity: b,
      });

      this.props.fetchCart(tmp);
    }
  };

  componentDidMount() {}

  render() {
    const { data } = this.props;

    return (
      <View style={styles.list}>
        <ScrollView>
          <View style={styles.container}>
            <View style={styles.contImageDel}>
              <TouchableOpacity onPress={this.deleteItem}>
                <Image source={imgDel} style={styles.imgDel} />
              </TouchableOpacity>
            </View>
            <View style={styles.contImage}>
              <Image
                source={{ uri: data.src }}
                style={styles.image}
                resizeMode="contain"
              />
            </View>
            <View style={styles.detail}>
              <Text numberOfLines={2} style={styles.name}>
                {data.name}
              </Text>
              <Text style={styles.price}>
                {Helper.formatDollar(data.pirce2)}
              </Text>
            </View>

            <View style={styles.quantity}>
              <View style={styles.plus}>
                <TouchableOpacity onPress={this.upQuantity}>
                  <Text style={{ fontSize: 25 }}>+</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.count}>
                <Text style={{ fontSize: 20 }}>{this.state.quantity}</Text>
              </View>
              <View style={styles.sub}>
                <TouchableOpacity onPress={this.downQuantity}>
                  <Text style={{ fontSize: 35 }}>-</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
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
export default connect(mapStateToProps, mapDispatchToProps)(ProductCart);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 120,
    marginBottom: 30,
    flexDirection: 'row',

    borderRadius: 8,
    elevation: 1,
  },

  contImageDel: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 0.5,
  },

  imgDel: {
    height: 30,
    width: 30,
  },

  contImage: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    borderRightWidth: 0.5,
  },

  detail: {
    flex: 4,
    marginRight: 10,
    paddingTop: 10,
  },

  name: {
    fontSize: 18,
  },

  price: {
    fontSize: 18,
    color: '#FC354C',
    position: 'absolute',
    bottom: 20,
  },

  image: {
    width: 70,
    height: 70,
  },

  quantity: {
    flex: 1,
  },

  plus: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  count: {
    fontSize: 22,
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  sub: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
