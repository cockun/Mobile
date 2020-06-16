import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import Product from './product';

var { height, width } = Dimensions.get('window');
import picture from '../image/image.jpg';

class Products extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Product
          title="Bàn Phím Akko 3069 True WireLess"
          image={picture}
          price="1.000.000"
        />
        <Product
          title="Bàn Phím Akko 3068 True WireLess"
          image={picture}
          price="1.000.000"
        />
        <Product
          title="Bàn Phím Akko 3068 True WireLess"
          image={picture}
          price="1.000.000"
        />
        <Product
          title="Bàn Phím Akko 3068 True WireLess"
          image={picture}
          price="1.000.000"
        />
        <Product
          title="Bàn Phím Akko 3068 True WireLess"
          image={picture}
          price="1.000.000"
        />
        <Product
          title="Bàn Phím Akko 3068 True WireLess"
          image={picture}
          price="1.000.000"
        />
        <Product
          title="Bàn Phím Akko 3068 True WireLess"
          image={picture}
          price="1.000.000"
        />
        <Product
          title="Bàn Phím Akko 3068 True WireLess"
          image={picture}
          price="1.000.000"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
});
export default Products;
