import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Products from './products';
export default function Search({ route }) {
  return (
    <View>
      <Products data={route.params.data} />
    </View>
  );
}

const styles = StyleSheet.create({});
