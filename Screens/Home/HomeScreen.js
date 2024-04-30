import {
    View,
    Text,
    Button,
    TextInput,
    TouchableOpacity,
    Image,
    ScrollView,
    FlatList,
    StyleSheet,
    Dimensions,
  } from 'react-native';
  import React, {useEffect, useState} from 'react';
  import {productData} from '../../Data/ProductData';
  import ProductCard from '../../Components/ProductCard';
  
  const numColumns = 2;
  const screenWidth = Dimensions.get('window').width;
  
  export default function HomeScreen({navigation}) {
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [filteredProducts, setFilteredProducts] = useState(productData);
  
    useEffect(() => {
      let val = [...new Set(productData.map(item => item.category))];
      setCategories(['All', ...val]);
    }, [productData]);
  
    useEffect(() => {
      if (selectedCategory === 'All') {
        setFilteredProducts(productData);
      } else {
        setFilteredProducts(
          productData.filter(item => item.category === selectedCategory),
        );
      }
    }, [selectedCategory]);
  
    return (
      <View
        style={{
          backgroundColor: '#D5F0F7',
          flexGrow: 1,
          paddingTop: 3,
        }}>
        <View style={{marginLeft: 20, marginRight: 20}}>
          <View
            style={{
              backgroundColor: '#fff',
              borderRadius: 20,
              paddingLeft: 10,
              flexGrow: 1,
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'row',
              paddingRight: 5,
            }}>
            <TextInput style={{flexGrow: 1}} />
            <TouchableOpacity
              activeOpacity={0.7}
              style={{backgroundColor: '#14D9E0', borderRadius: 30, padding: 3}}>
              <Image
                style={{margin: 2}}
                source={require('../../Assets/search.png')}
              />
            </TouchableOpacity>
          </View>
          <Text
            style={{fontSize: 23, marginTop: 10, fontWeight: 900, color: '#333'}}>
            Categories
          </Text>
          <ScrollView
            horizontal={true}
            style={{flexDirection: 'row', marginTop: 15}}>
            {categories.map((item, index) => {
              return (
                <TouchableOpacity
                  activeOpacity={0.7}
                  style={{marginRight: 15}}
                  onPress={() => {
                    setSelectedCategory(item);
                    //TODO
                  }}>
                  <Text
                    style={{
                      fontWeight: 600,
                      color: selectedCategory == item ? '#14D9E0' : '#555',
                    }}>
                    {item}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
  
          <View style={{flexGrow: 1, flexDirection: 'column'}}>
            {productData.map(item => {
              return (
                <FlatList
                  data={filteredProducts}
                  renderItem={({item}) => <ProductCard item={item} />}
                  keyExtractor={item => item.name}
                  numColumns={numColumns}
                  contentContainerStyle={styles.container}
                />
              );
            })}
          </View>
        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      padding: 0,
      margin: 0,
      paddingTop: 10,
    },
    item: {
      flex: 1,
      margin: 5,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      padding: 10,
      width: (screenWidth - 20 - 10 * (numColumns - 1)) / numColumns,
    },
    image: {
      width: '100%',
      height: 100,
      resizeMode: 'cover',
      marginBottom: 5,
    },
  });
  