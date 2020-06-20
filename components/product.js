/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import { Helper } from '../utils/helper';

class Product extends Component {
  render() {
    const { title, image, price, price2 } = this.props;
    return (
      <View style={styles.container}>
        <View style={{ flex: 1, backgroundColor: 'white' }}>
          <Image style={styles.imageProduct} source={{ uri: image }} />
          <Text numberOfLines={2} style={styles.title}>
            {title}
          </Text>
          <View style={styles.status}>
            <Text style={styles.price}>
              <Text style={styles.currency}>đ</Text>

              {Helper.formatDollar(price)}
            </Text>
            <Text style={styles.price2}>
              <Text style={styles.currency}>đ</Text>
              {Helper.formatDollar(price2)}
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
    padding: 5,
  },

  imageProduct: {
    width: '100%',
    height: 180,
    marginBottom: 10,
  },

  title: {
    fontSize: 15,
    marginHorizontal: 10,
    marginBottom: 10,
  },

  status: {
    marginBottom: 10,
    marginHorizontal: 10,
  },

  price: {
    fontSize: 15,
    color: '#ff3300',
    flex: 3,
    textDecorationLine: 'line-through',
  },
  price2: {
    fontSize: 15,
    color: '#ff3300',
    flex: 3,
  },

  currency: {
    textDecorationLine: 'underline',
    fontSize: 15,
  },

  quantityPaid: {
    flex: 2,
    lineHeight: 18,
    fontSize: 11,
  },
});
export default Product;
