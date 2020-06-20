/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableHighlight,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Coupon from './coupon';
export function ModalView(props) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.modalVisible2}
    >
      <View style={[styles.flex1, styles.containerModal]}>
        <View style={styles.mainContentModal}>
          <View style={[styles.row, { padding: 5 }]}>
            <Text style={[styles.flex1, styles.coupon]}>
              Thu thập mã giảm giá
            </Text>
            <TouchableHighlight
              style={{ backgroundColor: 'white' }}
              onPress={props.handleModal2}
            >
              <FontAwesome5 name="times" size={20} />
            </TouchableHighlight>
          </View>
          <View style={{ paddingVertical: 9 }}>
            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
              Mã giảm giá
            </Text>
            <View>
              <Coupon />
              <Coupon />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  flex1: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
  },
  centerView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainContentModal: {
    width: '100%',
    borderRadius: 12,
    height: '75%',
    backgroundColor: 'white',
    borderColor: '#edf1ea',
    padding: 20,
  },
  containerModal: {
    flexDirection: 'row',
    flexWrap: 'wrap-reverse',
  },
  coupon: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
