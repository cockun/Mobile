/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { StyleSheet, Text, View, Button, PointPropType } from 'react-native';

export default function Coupon(props) {
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.row}>
          <View style={{ flex: 6 }}>
            <Text style={styles.fontName}>Mã vận chuyển</Text>
            <Text style={{ color: 'white', textAlign: 'left' }}>
              Mua từ đ 49.000 tặng đ 20.000 phí vận chuyển{' '}
            </Text>
          </View>
          <View style={[styles.centerView, { flex: 4 }]}>
            <View style={styles.button}>
              <Button color="red" title="Sưu tầm" />
            </View>
          </View>
        </View>
      </View>
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
    width: '70%',
  },
});
