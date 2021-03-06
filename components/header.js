import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import search from '../image/search.png';
import cart from '../image/cart.png';
import message from '../image/message.png';
var { height, width } = Dimensions.get('window');
import { actFetchProducts } from '../actions/index';
import { connect } from 'react-redux';
import * as RootNavigation from '../utils/RootNavigation';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
    };
  }
  componentDidMount() {}

  render() {
    let tmp = this.props.products.filter((item) =>
      item.name.toLowerCase().includes(this.state.value.toLowerCase())
    );
    return (
      <View style={styles.container}>
        <View style={styles.searchForm}>
          <TouchableOpacity
            onPress={() => {
              RootNavigation.navigate('Search', { data: tmp });
            }}
          >
            <Image
              style={styles.searchIcon}
              source={search}
              resizeMode="contain"
            />
          </TouchableOpacity>

          <TextInput
            value={this.state.value}
            onChangeText={(text) => {
              this.setState({ value: text });
            }}
            style={styles.searchText}
            placeholder="Tìm kiếm"
          />
        </View>

        <View style={styles.cartForm}>
          <TouchableOpacity
            style={styles.cartIcon}
            onPress={() => RootNavigation.navigate('Carts', null)}
          >
            <Image style={styles.cartIconSub} source={cart} />
            <View style={styles.circle}>
              <Text style={styles.quantity}>{this.props.quantity}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: width - 20,
    height: width / 9,
    margin: 10,
    marginBottom: 30,
    borderRadius: 20,
  },

  searchForm: {
    flex: 7,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRightWidth: 0.4,
  },

  cartForm: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },

  searchIcon: {
    flex: 1,
    width: 20,
    height: 20,
    margin: 5,
  },

  searchText: {
    flex: 8,
    fontSize: 15,
    padding: 5,
  },

  cartIcon: {
    marginRight: 20,
  },

  cartIconSub: {
    width: 25,
    height: 25,
  },

  circle: {
    height: 18,
    width: 18,
    backgroundColor: 'red',
    borderRadius: 50,
    borderWidth: 1,
    borderColor: 'white',
    position: 'absolute',
    left: 20,
    top: -7,
    justifyContent: 'center',
    alignItems: 'center',
  },

  quantity: {
    color: 'white',
    fontWeight: 'bold',
  },

  messIcon: {
    width: 30,
    height: 30,
  },
});
const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

export default connect(mapStateToProps, null)(Header);
