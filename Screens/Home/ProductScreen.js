import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import {Image} from '@rneui/base';

export default function ProductScreen({navigation, route}) {
  const {id, name, description, category, price, rating, reviews, image} =
    route.params;

  const maxRating = 5;
  const ratingsArray = new Array(maxRating)
    .fill(0)
    .map((_, index) => index < Math.floor(rating));

  return (
    <ScrollView
      style={{
        flexGrow: 1,
        backgroundColor: '#D5F0F7',
        paddingTop: 3,
      }}>
      <View style={{flexGrow: 1}}>
        <View style={{flexGrow: 1}}>
          <View style={{marginLeft: 20, marginRight: 20}}>
            <Text
              style={{
                fontWeight: 600,
                color: 'gray',
                fontSize: 16,
                textTransform: 'capitalize',
              }}>
              {category}
            </Text>
            <Text
              style={{
                fontWeight: 900,
                color: '#333',
                fontSize: 25,
                textTransform: 'capitalize',
              }}>
              {name}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'start',
              }}>
              {ratingsArray.map((isFilled, index) => {
                return (
                  isFilled && (
                    <Image
                      key={index}
                      style={{width: 20, height: 20}}
                      source={require('../../Assets/rating.png')}
                    />
                  )
                );
              })}

              <Text
                style={{
                  marginLeft: 5,
                  fontWeight: 600,
                  color: '#333',
                  fontSize: 14,
                }}>
                ({rating})
              </Text>
            </View>
            <View style={{marginTop: 15}}>
              <Image style={styles.image} source={{uri: image}} />
            </View>
          </View>
          <View
            style={{
              flexGrow: 1,
              backgroundColor: '#fff',
              marginTop: 15,
              borderTopLeftRadius: 25,
              borderTopRightRadius: 25,
              flexDirection: 'column',
              padding: 20,
            }}>
            <Text
              style={{
                fontWeight: 700,
                fontSize: 18,
                color: '#333',
                fontFamily: 'open-sans',
                textAlign: 'justify',
              }}>
              Description
            </Text>
            <Text
              style={{
                fontWeight: 500,
                fontSize: 14,
                color: '#555',
                fontFamily: 'open-sans',
                textAlign: 'justify',
              }}>
              {description}
            </Text>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                marginVertical: 10,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'start',
                }}>
                <Text
                  style={{
                    fontWeight: 700,
                    fontSize: 16,
                    color: '#444',
                    fontFamily: 'open-sans',
                  }}>
                  Retail price
                </Text>
                <Text
                  style={{
                    fontWeight: 700,
                    fontSize: 17,
                    color: '#14D9E0',
                    fontFamily: 'open-sans',
                    marginLeft: 10,
                  }}>
                  {price}
                </Text>
              </View>
              <View style={{flexGrow: 1}} />
              <TouchableOpacity activeOpacity={0.7}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'start',
                  }}>
                  <Text
                    style={{
                      fontWeight: 700,
                      fontSize: 16,
                      color: '#444',
                      fontFamily: 'open-sans',
                    }}>
                    Reviews
                  </Text>
                  <Text
                    style={{
                      fontWeight: 700,
                      fontSize: 14,
                      color: '#14D9E0',
                      fontFamily: 'open-sans',
                      marginLeft: 3,
                    }}>
                    ({reviews})
                  </Text>
                  <Image
                    style={{marginLeft: 10, width: 20, height: 20}}
                    source={require('../../Assets/arrow.png')}
                  />
                </View>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              style={{
                padding: 15,
                backgroundColor: '#14D9E0',
                borderRadius: 20,
                marginVertical: 10,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{fontWeight: 700, fontSize: 15, color: '#222'}}>
                Add To cart
              </Text>
              <Image
                style={{width: 20, height: 20, marginLeft: 15}}
                source={require('../../Assets/cart.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
    marginBottom: 5,
    borderRadius: 5,
  },
});
