import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Product from './product';

import { connect } from 'react-redux';

import * as RootNavigation from '../utils/RootNavigation';

class Products extends Component {
  render() {
    return (
      <View style={{ paddingHorizontal: 3 }}>
        <FlatList
          data={this.props.products}
          keyExtractor={(item) => item.id}
          numColumns={2}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                style={{ flex: 1 }}
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
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
});

const mapStateToProps = (state) => {
  return {
    products: state.products,
    categories: state.categories,
  };
};
export default connect(mapStateToProps, null)(Products);
