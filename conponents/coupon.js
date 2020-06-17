/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
export default function Coupon(props) {
  return (
    <View>
      <LinearGradient
        colors={['#EF3B36', '#ffc3a0']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0.5 }}
        style={styles.container}
      >
        <View style={styles.row}>
          <View style={{ flex: 6 }}>
            <Text style={styles.fontName}>Mã vận chuyển</Text>
            <Text style={{ color: 'white', textAlign: 'left' }}>
              Mua từ đ 49.000 tặng đ 20.000 phí vận chuyển{' '}
            </Text>
          </View>

          <View style={[styles.centerView, { flex: 4 }]}>
            <LinearGradient
              colors={['#dd2ce0b3', '#dd2ce0b3']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0.5 }}
              style={{ width: '70%', borderRadius: 8 }}
            >
              <TouchableOpacity style={[styles.button, styles.centerView]}>
                <Text>Sưu tầm</Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  fontName: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 23,
  },
  container: {
    width: '100%',
    marginTop: 19,
    padding: 20,
    backgroundColor: 'blue',
    height: 140,
    borderRadius: 10,
  },
  centerView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    padding: 14,
    borderRadius: 6,
  },
});
