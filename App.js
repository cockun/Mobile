import React, { useState, useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import { Item } from './conponents/Item';
import { NavigationContainer, Tab } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Detail from './conponents/detail';
import { callApi } from './utils/apiCaller';
import img from './img.jpg';

import Home from './conponents/Home';

const Stack = createStackNavigator();
export default function App() {
  // const [data, setData] = useState({});
  // useEffect(() => {
  //   callApi('Products/2', 'GET', null).then((res) => {
  //     let a = res;
  //     setData(a.data);
  //     console.log(res.data);
  //   });
  // }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Detail" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
