/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableHighlight,
} from 'react-native';
import img from '../img.jpg';

import FontAwesome5 from 'react-native-vector-icons/MaterialIcons';
import freeshipImg from '../image/freeship.png';
import { FooterDetail } from './footerDetail';
import { ModalView } from './modalView';

export default function Detail(props) {
  const [modalVisible, setModalVisible] = useState(false);
  const handleModal = () => {
    setModalVisible(!modalVisible);
  };
  return (
    <View style={styles.flex1}>
      <View style={styles.flex1}>
        <ScrollView style={styles.flex1} showsVerticalScrollIndicator={false}>
          <View style={styles.container}>
            <View style={{ height: 420 }}>
              <Image source={img} resizeMode="stretch" style={styles.imga} />
            </View>
            <View style={{ backgroundColor: 'white', paddingHorizontal: 10 }}>
              <View style={styles.containerInfo}>
                <View>
                  <View style={styles.containerPrice}>
                    <Text style={styles.price}>185.000</Text>
                    <Text style={styles.d}>đ</Text>
                  </View>

                  <View style={styles.containerPrice}>
                    <Text style={styles.price2}>444.000</Text>
                    <Text style={styles.d2}>đ</Text>
                    <Text>-48%</Text>
                  </View>
                </View>
                <View style={styles.containerFavorite}>
                  <FontAwesome5
                    style={{ paddingRight: 14 }}
                    name={'favorite'}
                    size={28}
                  />
                  <FontAwesome5 name={'share'} size={28} />
                </View>
              </View>
              <View>
                <Text style={[styles.fontStyle]}>
                  [HOT TREND 2020] Gọng kính Gentle Monster South SIde Fullbox
                  Gm-18
                </Text>
              </View>
              <View style={{ paddingBottom: 10 }}>
                <View style={[styles.containerReview, styles.row]}>
                  <View style={[styles.row, styles.align, styles.review]}>
                    <Text style={{ fontSize: 17 }}>5.0</Text>
                    <Text>/5</Text>
                    <View style={[styles.row, styles.star]}>
                      <FontAwesome5
                        name={'star'}
                        style={{ color: 'orange' }}
                        size={14}
                      />
                      <FontAwesome5
                        name={'star'}
                        style={{ color: 'orange' }}
                        size={14}
                      />
                      <FontAwesome5
                        name={'star'}
                        style={{ color: 'orange' }}
                        size={14}
                      />
                      <FontAwesome5
                        name={'star'}
                        style={{ color: 'orange' }}
                        size={14}
                      />
                      <FontAwesome5
                        name={'star'}
                        style={{ color: 'orange' }}
                        size={14}
                      />
                    </View>
                  </View>
                  <View style={{ height: 20 }}>
                    <Image
                      source={freeshipImg}
                      style={styles.imga}
                      resizeMode="stretch"
                    />
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.section}>
              <View style={[styles.row, styles.borderBottom]}>
                <Text
                  style={[
                    styles.promotionCode,
                    styles.fontStyle,
                    styles.flexCenter,
                  ]}
                >
                  Mã giảm giá
                </Text>

                <View style={[styles.flexCenter, styles.flex1, styles.row]}>
                  <Text style={styles.flex1}>Miễn phí vận chuyển</Text>
                  <FontAwesome5
                    name={'keyboard-arrow-right'}
                    style={{ color: 'orange' }}
                    size={20}
                  />
                </View>
              </View>

              <View style={[styles.row, { paddingTop: 10 }]}>
                <Text style={[styles.promotionCode, styles.fontStyle]}>
                  Khuyến mãi
                </Text>
                <TouchableHighlight
                  style={styles.flex1}
                  onPress={() => {
                    setModalVisible(true);
                  }}
                >
                  <View style={[styles.flexCenter, styles.flex1, styles.row]}>
                    <Text style={styles.flex1}>Miễn phí vận chuyển</Text>
                    <FontAwesome5
                      name={'keyboard-arrow-right'}
                      style={{ color: 'orange' }}
                      size={20}
                    />
                  </View>
                </TouchableHighlight>
              </View>
            </View>
            <View style={styles.section}>
              <View style={[styles.row, styles.flexCenter]}>
                <Text style={[styles.flex1, styles.fontStyle]}>
                  Hình thức giao hàng
                </Text>
                <View style={[styles.row, styles.flexCenter]}>
                  <Text>16.500 đ</Text>
                  <FontAwesome5
                    name={'keyboard-arrow-right'}
                    style={{ color: 'orange' }}
                    size={20}
                  />
                </View>
              </View>
              <View style={[styles.row, { paddingTop: 10 }]}>
                <View style={{ width: 20, height: 20, marginRight: 8 }}>
                  <Image
                    source={freeshipImg}
                    style={styles.imga}
                    resizeMode="stretch"
                  />
                </View>
                <View style={styles.flex1}>
                  <Text>
                    Giảm phí vận chuyển tối đa 15.000 đ với đơn hàng từ 699,000
                    đ các sản phẩm của Cóc
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.section}>
              <View style={styles.borderBottom}>
                <Text style={styles.fontStyle}>Mô tả sản phẩm</Text>
              </View>
              <View style={(styles.flex1, { paddingTop: 10 })}>
                <Text>
                  Tính năng: Loại mắt kính: Tính năng: Loại mắt kính: Tính năng:
                  Loại mắt kính: Tính năng: Loại mắt kính: Tính năng: Loại mắt
                  kính: Tính năng: Loại mắt kính: Tính năng: Loại mắt kính: Tính
                  năng: Loại mắt kính: Tính năng: Loại mắt kính:
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>

      <ModalView handleModal2={handleModal} modalVisible2={modalVisible} />
      <FooterDetail />
    </View>
  );
}

const styles = StyleSheet.create({
  imga: {
    padding: 10,
    width: '100%',
    height: '100%',
  },
  align: {
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  container: {
    flex: 1,
    paddingHorizontal: 5,
  },
  flex1: {
    flex: 1,
  },
  d: {
    fontSize: 20,
    color: 'red',
  },
  d2: {
    paddingHorizontal: 3,
  },
  containerPrice: {
    flexDirection: 'row',
  },
  price2: {
    textDecorationLine: 'line-through',
    fontSize: 14,
  },
  price: {
    color: 'red',
    fontSize: 25,
    fontWeight: '500',
  },
  containerInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    paddingVertical: 8,
  },
  containerFavorite: {
    flexDirection: 'row',
    paddingTop: 5,
  },
  containerReview: {
    paddingTop: 10,
  },
  name: {
    fontSize: 20,
  },
  star: {
    paddingLeft: 8,
  },
  review: {
    fontSize: 20,
    flex: 1,
  },
  promotionCode: {
    fontSize: 18,
    paddingTop: 6,
    width: 140,
  },
  promotion: {
    fontSize: 18,
  },
  section: {
    marginTop: 14,
    backgroundColor: 'white',
    padding: 10,
  },
  flexCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  fontStyle: {
    fontSize: 18,
    fontWeight: '700',
  },
  borderBottom: {
    borderBottomWidth: 1,
    borderBottomColor: '#edf0f3',
    paddingBottom: 10,
  },
});
