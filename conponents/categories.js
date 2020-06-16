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

import Category from './category';
import suit from '../image/suit.png';
import womanClothes from '../image/professional.png';

const styles = StyleSheet.create({
  container: {
    width: width,
    height: width * 0.85,
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 20,
    marginHorizontal: 5,
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
    paddingLeft: 20,
  },
  categories: {
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
});

export default class Categories extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.text}>DANH MỤC</Text>
        </View>
        <ScrollView horizontal={true}>
          <View style={styles.categories}>
            <Category imgSource={suit} Title={'Thời Trang Nam'} />
            <Category imgSource={suit} Title={'Thời Trang Nam'} />
            <Category imgSource={suit} Title={'Thời Trang Nam'} />
            <Category imgSource={suit} Title={'Thời Trang Nam'} />
            <Category imgSource={suit} Title={'Thời Trang Nam'} />
            <Category imgSource={suit} Title={'Thời Trang Nam'} />
            <Category imgSource={suit} Title={'Thời Trang Nam'} />
            <Category imgSource={suit} Title={'Thời Trang Nam'} />
            <Category imgSource={suit} Title={'Thời Trang Nam'} />
            <Category imgSource={suit} Title={'Thời Trang Nam'} />
            <Category imgSource={suit} Title={'Thời Trang Nam'} />
            <Category imgSource={suit} Title={'Thời Trang Nam'} />
            <Category imgSource={suit} Title={'Thời Trang Nam'} />
            <Category imgSource={suit} Title={'Thời Trang Nam'} />
            <Category imgSource={suit} Title={'Thời Trang Nam'} />
            <Category imgSource={suit} Title={'Thời Trang Nam'} />
          </View>
        </ScrollView>
      </View>
    );
  }
}
