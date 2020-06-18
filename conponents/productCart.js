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
import { min } from 'react-native-reanimated';

export default class ProductCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
      showProduct: true,
      total: 0,
    };
  }

  formatString = (num) => {
    num = num + '';

    let count = 0,
      res = '',
      lastRes = '';
    for (let i = num.length - 1; i >= 0; i--) {
      count++;
      res += num[i];

      if (count == 3) {
        res += '.';
        count = 0;
      }
    }
    for (let i = res.length - 1; i >= 0; i--) {
      lastRes += res[i];
    }
    return lastRes;
  };

  upQuantity = () => {
    const { price, getTotal } = this.props;
    let nowQ = this.state.quantity;
    nowQ++;
    let totalPrice = price * nowQ;
    this.setState({
      quantity: nowQ,
      total: totalPrice,
    });
    getTotal(price);
  };

  downQuantity = () => {
    const { getTotal, price } = this.props;
    let nowQ = this.state.quantity;
    if (nowQ <= 1) return;
    else {
      let totalPrice = price * (nowQ - 1);
      this.setState({
        quantity: nowQ - 1,
        total: totalPrice,
      });
      getTotal(price * -1);
    }
  };

  deleteItem = () => {
    const { getTotal } = this.props;
    getTotal(this.state.total * -1);
    this.setState({
      showProduct: false,
    });
  };

  componentDidMount() {
    const { price, getFirstTotal } = this.props;
    this.setState({
      total: price,
    });
    getFirstTotal(price);
  }

  render() {
    const { name, image } = this.props;
    return (
      <View style={styles.list}>
        <ScrollView>
          {this.state.showProduct && (
            <View style={styles.container}>
              <View style={styles.contImageDel}>
                <TouchableOpacity onPress={this.deleteItem}>
                  <Image source={imgDel} style={styles.imgDel} />
                </TouchableOpacity>
              </View>
              <View style={styles.contImage}>
                <Image
                  source={image}
                  style={styles.image}
                  resizeMode="contain"
                />
              </View>
              <View style={styles.detail}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.price}>
                  {this.formatString(this.state.total)} đ
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
          )}
        </ScrollView>
      </View>
    );
  }
}

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
