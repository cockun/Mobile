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
    const { title, image, price } = this.props;
    return (
      <TouchableOpacity>
        <View style={styles.container}>
          <Image style={styles.imageProduct} source={image} />
          <Text style={styles.title}>{title}</Text>
          <View style={styles.status}>
            <Text style={styles.price}>
              <Text style={styles.currency}>đ</Text>
              {price}
            </Text>
            <Text style={styles.quantityPaid}>Đã bán 20</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: width * 0.47,
    height: width * 0.65,
    borderRadius: 5,
    elevation: 2,
    backgroundColor: 'white',
    marginBottom: 10,
  },

  imageProduct: {
    width: '100%',
    height: 140,
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
