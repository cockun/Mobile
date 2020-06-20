import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  ScrollView,
} from 'react-native';
var { height, width } = Dimensions.get('window');
import { connect } from 'react-redux';

import * as RootNavigation from '../utils/RootNavigation';

import Category from './category';

const styles = StyleSheet.create({
  container: {
    width: width,
    height: 300,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 9,

    backgroundColor: 'white',
    justifyContent: 'center',
  },
  title: {
    paddingLeft: 10,
    marginBottom: 25,
  },
  text: {
    fontSize: 20,
    color: 'orange',
    fontWeight: 'bold',
    paddingLeft: 15,
    marginTop: 14,
  },
  categories: {
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
});

export class Categories extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.text}>DANH MỤC</Text>
        </View>
        <ScrollView horizontal={true}>
          <View style={styles.categories}>
            {this.props.categories.map((item) => {
              return (
                <Category
                  key={item.id}
                  imgSource={{ uri: item.src }}
                  Title={item.category}
                />
              );
            })}
          </View>
        </ScrollView>
      </View>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    products: state.products,
    categories: state.categories,
  };
};
export default connect(mapStateToProps, null)(Categories);
