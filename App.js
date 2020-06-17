import React, { useState, useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import { Item } from './conponents/Item';
import { NavigationContainer, Tab } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Detail from './conponents/detail';
import products from './reducers/products';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { navigationRef } from './utils/RootNavigation';
const store = createStore(products);

import Home from './conponents/Home';

const Stack = createStackNavigator();
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator
          screenOptions={{
            headerShown: true,
          }}
        >
          <Stack.Screen name="home" component={Home} />
          <Stack.Screen name="Detail" component={Detail} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
