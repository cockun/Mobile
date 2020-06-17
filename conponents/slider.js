import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
  Dimensions,
  ScrollView,
} from 'react-native';
var { height, width } = Dimensions.get('window');
import Swiper from 'react-native-swiper';
import event1 from '../image/event1.jpg';
import event2 from '../image/event2.jpg';
import event3 from '../image/event3.jpg';
import event4 from '../image/event4.jpg';

const styles = StyleSheet.create({
  wrapper: {},
  imageBanner: {
    height: width / 3,
    width: width - 40,
    borderRadius: 10,
    marginHorizontal: 20,
  },
});

const banners = [event1, event2, event3, event4];

export default class SwiperComponent extends Component {
  render() {
    return (
      <TouchableOpacity>
        <ScrollView>
          <View style={{ flex: 1, backgroundColor: '#f2f2f2' }}>
            <View style={{ width: width, alignItems: 'center' }}>
              <Swiper
                style={{ height: width / 3 }}
                showsButtons={false}
                autoplay={true}
                autoplayTimeout={2}
              >
                {banners.map((itembann, index) => {
                  return (
                    <Image
                      key={index}
                      style={styles.imageBanner}
                      resizeMode="contain"
                      source={itembann}
                    />
                  );
                })}
              </Swiper>
            </View>
          </View>
        </ScrollView>
      </TouchableOpacity>
    );
  }
}
