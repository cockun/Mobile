import React, { Component } from 'react';
import {
  View,
  Dimensions,
  StyleSheet,
  ScrollView,
  PointPropType,
} from 'react-native';
import Products from './products';
import Header from './header';
import Slider from './slider';
import Categories from './categories';
import { connect } from 'react-redux';

import { callApi } from '../utils/apiCaller';
import { actFetchProducts } from '../actions/index';
import { FlatList } from 'react-native-gesture-handler';

//const
var { height, width } = Dimensions.get('window');
///

// image

//
class subHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          id: 1,
          name: 'coc',
        },
      ],
    };
  }
  componentDidMount() {
    callApi('Products', 'GET', null).then((res) => {
      this.props.fetchAllProducts(res.data);
    });
  }

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

const mapStateToProps = (state) => {
  return {
    products: state,
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchAllProducts: (products) => {
      dispatch(actFetchProducts(products));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(subHome);
