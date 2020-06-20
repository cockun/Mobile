import React, { useState, useEffect } from 'react';
import { View, Text, Image, CheckBox } from 'react-native';

import { NavigationContainer, Tab } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import products from './reducers/products';
import { categories } from './reducers/categories';
import { cart } from './reducers/cart';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

import { navigationRef } from './utils/RootNavigation';
const store = createStore(combineReducers({ products, categories, cart }));

import Home from './components/Home';
import Detail from './components/detail';
import Register from './components/register';
import Login from './components/login';
import Carts from './components/carts';
import CheckOut from './components/checkout';
import Update from './components/update';
import Search from './components/search';
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
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Detail" component={Detail} />
          <Stack.Screen name="Carts" component={Carts} />
          <Stack.Screen name="Checkout" component={CheckOut} />
          <Stack.Screen name="Update" component={Update} />
          <Stack.Screen name="Search" component={Search} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
