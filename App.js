import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './Screens/HomeScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, TouchableOpacity, View} from 'react-native';

import ChatScreen from './Screens/ChatScreen';
import FavScreen from './Screens/FavScreen';
import CartScreen from './Screens/CartScreen';
import AccountScreen from './Screens/AccountScreen';

function App() {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route, navigation}) => ({
          tabBarHideOnKeyboard: true,
          tabBarActiveTintColor: '#0DD8DF',
          tabBarInactiveTintColor: '#333',
          tabBarActiveBackgroundColor: '#FFFFFF',
          tabBarInactiveBackgroundColor: '#FFFFFF',
          headerStyle: {backgroundColor: '#D5F0F7'},
          headerShadowVisible:false,
          tabBarShowLabel: false,
          title: '',
          headerRight: () => {
            return (
              <View style={{marginRight: 10}}>
                <TouchableOpacity
                  onPress={() => navigation.jumpTo('Account')}
                  activeOpacity={0.5}>
                  <Image
                    className="h-1"
                    source={require('./Assets/account-rounded.png')}
                  />
                </TouchableOpacity>
              </View>
            );
          },
          headerLeft: () => {
            return (
              <View style={{marginLeft: 10}}>
                <TouchableOpacity
                  onPress={() => navigation.jumpTo('Account')}
                  activeOpacity={0.5}>
                  <Image
                    className="h-10"
                    source={require('./Assets/menu.png')}
                  />
                </TouchableOpacity>
              </View>
            );
          },

          tabBarIcon: ({focused, color, size}) => {
            switch (route.name) {
              case 'Home':
                return (
                  <Image
                    className="w-7 h-7"
                    source={
                      focused
                        ? require('./Assets/home-active.png')
                        : require('./Assets/home.png')
                    }
                  />
                );
                break;
              case 'Chat':
                return (
                  <Image
                    className="w-7 h-7"
                    source={
                      focused
                        ? require('./Assets/chat-active.png')
                        : require('./Assets/chat.png')
                    }
                  />
                );
                break;
              case 'Favorite':
                return (
                  <Image
                    className="w-7 h-7"
                    source={
                      focused
                        ? require('./Assets/like-active.png')
                        : require('./Assets/like.png')
                    }
                  />
                );
                break;
              case 'Cart':
                return (
                  <Image
                    className="w-7 h-7"
                    source={
                      focused
                        ? require('./Assets/cart-active.png')
                        : require('./Assets/cart.png')
                    }
                  />
                );
                break;
              case 'Account':
                return (
                  <Image
                    className="w-7 h-7"
                    source={
                      focused
                        ? require('./Assets/account-active.png')
                        : require('./Assets/account.png')
                    }
                  />
                );
                break;

              default:
                return null;
                break;
            }
          },
        })}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Chat" component={ChatScreen} />
        <Tab.Screen name="Favorite" component={FavScreen} />
        <Tab.Screen name="Cart" component={CartScreen} />
        <Tab.Screen name="Account" component={AccountScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
