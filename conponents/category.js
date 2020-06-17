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
console.log(width);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: width * 0.4,
    marginBottom: 33,
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

export default class Category extends Component {
  render() {
    const { imgSource, Title } = this.props;
    return (
      <TouchableOpacity>
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
