import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

const screenWidth = Dimensions.get('window').width;
const numColumns = 2;

export default function ProductCard({item}) {
  const [isLiked, setLiked] = useState(false);
  const navigation = useNavigation();

  const handleLike = () => {
    setLiked(pre => !pre);
  };

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Product', {...item});
      }}
      activeOpacity={0.7}
      style={{...styles.item, backgroundColor: '#fff', shadowColor: '#444'}}>
      <View key={item.id}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 5,
          }}>
          <Text style={{flexGrow: 1, color: '#0DD8DF', fontWeight: 700}}>
            {item.price}
          </Text>
          <TouchableOpacity onPress={handleLike}>
            <Image
              style={{width: 25, height: 25}}
              source={
                isLiked
                  ? require('../Assets/like-red.png')
                  : require('../Assets/like.png')
              }
            />
          </TouchableOpacity>
        </View>
        <Image source={{uri: item.image}} style={styles.image} />
        <Text
          style={{
            marginVertical: 5,
            fontWeight: 900,
            color: '#333',
            textAlign: 'left',
            paddingLeft: 10,
          }}>
          {item.name}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  item: {
    flex: 1,
    margin: 3,
    alignItems: 'start',
    justifyContent: 'center',
    borderRadius: 5,
    padding: 0,
    width: (screenWidth - 20 - 10 * (numColumns - 1)) / numColumns,
  },
  image: {
    width: '100%',
    height: 100,
    resizeMode: 'cover',
    marginBottom: 5,
  },
});
