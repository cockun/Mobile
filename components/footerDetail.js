/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import LinearGradient from 'react-native-linear-gradient';

export function FooterDetail(props) {
  let action = '';
  return (
    <View style={[styles.row, { padding: 7, height: 65 }]}>
      <View style={[styles.row, styles.flexCenter, styles.flex1]}>
        <View
          style={[styles.flex1, { paddingVertical: 1, paddingHorizontal: 5 }]}
        >
          <LinearGradient
            colors={['#f1ec5f', '#ecb055']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0.5 }}
            style={[styles.button, styles.flexCenter, { flex: 1 }]}
          >
            <TouchableOpacity
              onPress={() => {
                action = 'buyNow';
                props.handleModalAmount2(action);
              }}
              style={[styles.flexCenter, { flex: 1 }]}
            >
              <Text style={{ backgroundColor: 'transparent', fontSize: 15 }}>
                Mua ngay
              </Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
        <View
          style={[styles.flex1, { paddingVertical: 1, paddingHorizontal: 5 }]}
        >
          <LinearGradient
            colors={['#ecb055', '#ea6d23']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0.5 }}
            style={[styles.button, styles.flexCenter, { flex: 1 }]}
          >
            <TouchableOpacity
              onPress={() => {
                action = 'addToCart';
                props.handleModalAmount2(action);
              }}
              style={{ flex: 1 }}
            >
              <View style={[styles.flex1, styles.flexCenter, { padding: 10 }]}>
                <Text style={{ fontSize: 15, textAlign: 'center' }}>
                  Thêm vào giỏ hàng
                </Text>
              </View>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  flex1: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
  },
  flexCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    paddingRight: 20,
  },
  button: {
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
  },
});
