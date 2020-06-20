import React, { Component } from 'react';
import {
  View,
  Dimensions,
  StyleSheet,
  ScrollView,
  PointPropType,
  SectionList,
} from 'react-native';
import Products from './products';
import Header from './header';
import Slider from './slider';
import Categories from './categories';
import { callApi } from '../utils/apiCaller';
import {
  actFetchCart,
  actFetchProducts,
  actFetchCategories,
} from '../actions/index';
import { connect } from 'react-redux';

//const
var { height, width } = Dimensions.get('window');
///

// image

//
class subHome extends Component {
  constructor(props) {
    super(props);
    this.DATA = [
      {
        data: ['Risotto'],
      },
    ];
  }
  componentDidMount() {
    callApi('Products?p=1&&l=60', 'GET', null).then((res) => {
      this.props.fetchAllProducts(res.data);
    });
    callApi('Categories?p=1&&l60', 'GET', null).then((res) => {
      this.props.fetchAllCategories(res.data);
    });
  }

  render() {
    return (
      <View>
        <SectionList
          sections={this.DATA}
          keyExtractor={(item, index) => item + index}
          renderItem={(item) => {
            return (
              <View style={styles.container}>
                <Header quantity={this.props.cart.length} />
                <Slider />
                <Categories />
                <Products />
              </View>
            );
          }}
        />
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
    products: state.products,
    categories: state.categories,
    cart: state.cart,
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchAllProducts: (products) => {
      dispatch(actFetchProducts(products));
    },
    fetchAllCategories: (category) => {
      dispatch(actFetchCategories(category));
    },
    fetchCart: (cart) => {
      dispatch(actFetchCart(cart));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(subHome);
