import React from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';
import img from '../image/hoa.jpg';
export function Item() {
  return (
    <View>
      <Image source={img} />
    </View>
  );
}

const styles = StyleSheet.create({});
