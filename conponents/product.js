import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

var { height, width } = Dimensions.get('window');
class Product extends Component {
  render() {
    const { title, image, price, price2 } = this.props;
    return (
      <View style={styles.container}>
        <View>
          <Image style={styles.imageProduct} source={{ uri: image }} />
          <Text style={styles.title}>{title}</Text>
          <View style={styles.status}>
            <Text style={styles.price}>
              <Text style={styles.currency}>đ</Text>
              {price}
            </Text>
            <Text style={styles.price2}>
              <Text style={styles.currency}>đ</Text>
              {price2}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: width * 0.47,
    height: width * 0.59,
    borderRadius: 5,
    elevation: 2,
    backgroundColor: 'white',
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 10,
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
    flexDirection: 'row',
    alignItems: 'flex-end',
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
