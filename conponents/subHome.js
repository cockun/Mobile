import React, { Component } from 'react';
import { View, Dimensions, StyleSheet, ScrollView } from 'react-native';
import Products from './products';
import Header from './header';
import Slider from './slider';
import Categories from './categories';

//const
var { height, width } = Dimensions.get('window');
///

// image

//
class subHome extends Component {
  render() {
    return (
      <View>
        <ScrollView>
          <View style={styles.container}>
            <Header />
            <Slider />
            <Categories />
            <Products />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
});

export default subHome;
