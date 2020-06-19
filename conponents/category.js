import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
var { height, width } = Dimensions.get('window');

import * as RootNavigation from '../utils/RootNavigation';
import { connect } from 'react-redux';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: 120,
    marginBottom: 24,
  },
  circle: {
    backgroundColor: '#f5f5ef',
    borderRadius: 50,
    height: width * 0.2,
    width: width * 0.2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: width * 0.15,
    height: width * 0.13,
  },
  title: {
    fontSize: 15,
    textAlign: 'center',
  },
});

export class Category extends Component {
  render() {
    const { imgSource, Title } = this.props;
    let tmp = this.props.products.filter((item) =>
      item.name.toLowerCase().includes(Title.toLowerCase())
    );
    return (
      <TouchableOpacity
        onPress={() => {
          RootNavigation.navigate('Search', { data: tmp });
        }}
      >
        <View style={styles.container}>
          <View style={styles.circle}>
            <Image
              style={styles.image}
              source={imgSource}
              resizeMode="contain"
            />
          </View>
          <View>
            <Text style={styles.title}>{Title}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

export default connect(mapStateToProps, null)(Category);
