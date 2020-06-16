import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

var { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: width * 0.9,
    height: width * 0.3,
    backgroundColor: 'pink',
    borderRadius: 30,
    elevation: 10,
    opacity: 0.8,
  },
  image: {
    width: 50,
    height: 50,
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default class OptionID extends Component {
  render() {
    const { title, img } = this.props;
    return (
      <TouchableOpacity>
        <View style={styles.container}>
          <Image source={img} style={styles.image} />
          <Text style={styles.title}>{title}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}
