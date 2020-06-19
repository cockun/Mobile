import React, { useState, useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import { Item } from './conponents/Item';
import { NavigationContainer, Tab } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Detail from './conponents/detail';
import products from './reducers/products';
import { categories } from './reducers/categories';
import { cart } from './reducers/cart';
import { Provider } from 'react-redux';
import Carts from './conponents/carts';
import { createStore, combineReducers } from 'redux';

import { navigationRef } from './utils/RootNavigation';
const store = createStore(combineReducers({ products, categories, cart }));

import Home from './conponents/Home';
import Search from './conponents/search';

const Stack = createStackNavigator();
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="home" component={Home} />
          <Stack.Screen name="Search" component={Search} />
          <Stack.Screen name="Detail" component={Detail} />
          <Stack.Screen name="Carts" component={Carts} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
