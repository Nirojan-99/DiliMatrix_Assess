import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './Home/HomeScreen';
import ProductScreen from './Home/ProductScreen';

export default function HomeScreen() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator initialRouteName="Home1">
      <Stack.Screen
        name="Home1"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Product"
        component={ProductScreen}
        options={({route}) => ({
          title: '',
          headerTransparent: true,
          headerShown: false,
        })}
      />
    </Stack.Navigator>
  );
}
