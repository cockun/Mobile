/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableNativeFeedback,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import LinearGradient from 'react-native-linear-gradient';

export function FooterDetail() {
  return (
    <View style={[styles.row, { padding: 7 }]}>
      <View style={styles.row}>
        <View style={[styles.flexCenter, styles.item]}>
          <FontAwesome5 name={'store'} style={{}} size={21} />
          <Text>Cửa hàng</Text>
        </View>
        <View style={[styles.flexCenter, styles.item]}>
          <FontAwesome5 name={'comments'} style={{}} size={21} />
          <Text>Chat</Text>
        </View>
      </View>

      <View style={[styles.row, styles.flexCenter, styles.flex1]}>
        <View
          style={[styles.flex1, { paddingVertical: 1, paddingHorizontal: 5 }]}
        >
          <TouchableNativeFeedback style={{ flex: 1 }}>
            <LinearGradient
              colors={['#f1ec5f', '#ecb055']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0.5 }}
              style={[styles.button, styles.flexCenter, { flex: 1 }]}
            >
              <Text style={{ backgroundColor: 'transparent', fontSize: 15 }}>
                Mua ngay
              </Text>
            </LinearGradient>
          </TouchableNativeFeedback>
        </View>
        <View
          style={[styles.flex1, { paddingVertical: 1, paddingHorizontal: 5 }]}
        >
          <TouchableOpacity style={{ flex: 1 }}>
            <LinearGradient
              colors={['#ecb055', '#ea6d23']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0.5 }}
              style={[styles.button, styles.flexCenter, { flex: 1 }]}
            >
              <View style={[styles.flex1, styles.flexCenter, { padding: 10 }]}>
                <Text style={{ fontSize: 15, textAlign: 'center' }}>
                  Thêm vào giỏ hàng
                </Text>
              </View>
            </LinearGradient>
          </TouchableOpacity>
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
