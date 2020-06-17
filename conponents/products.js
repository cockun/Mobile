import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Product from './product';

import { connect } from 'react-redux';

import * as RootNavigation from '../utils/RootNavigation';
class Products extends Component {
  render() {
    return (
      <View style={styles.container}>
        {this.props.products.map((item) => {
          return (
            <TouchableOpacity
              key={item.id}
              onPress={() => {
                RootNavigation.navigate('Detail', { item });
              }}
            >
              <Product
                title={item.name}
                image={item.src}
                price={item.price}
                price2={item.pirce2}
              />
            </TouchableOpacity>
          );
        })}
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

const mapStateToProps = (state) => {
  return {
    products: state,
  };
};
export default connect(mapStateToProps, null)(Products);
