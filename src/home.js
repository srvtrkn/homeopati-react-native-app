import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

import AppContainer from './appContainer';

Home = () => {
  const [loading, setLoading] = useState(false);
  const list = [
    {
      text: 'Seat of the Symptoms',
      img: require('./images/1.jpg'),
    },
    {
      text: 'Moral and Intellectual Faculties',
      img: require('./images/2.jpg'),
    },
    {
      text: 'Organs and Their Functions',
      img: require('./images/3.jpg'),
    },
    {
      text: 'Morbid Conditions and Sensations',
      img: require('./images/4.jpg'),
    },
    {
      text: 'Circulation and Fevers',
      img: require('./images/5.jpg'),
    },
    {
      text: 'Yawning,Sleep and Dreams',
      img: require('./images/6.jpg'),
    },
    {
      text: 'Etiology, etc.',
      img: require('./images/7.jpg'),
    },
    {
      text: 'Concordances of the Homeopatic Medicines',
      img: require('./images/8.jpg'),
    },
  ];
  deneme = () => {
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timeout);
  };
  return (
    <AppContainer header="HOMEOPATI" loading={loading}>
      <View style={styles.container}>
        {list.map((item, i) => {
          return (
            <Box key={i} text={item.text} img={item.img} onPress={deneme} />
          );
        })}
      </View>
    </AppContainer>
  );
};
export default Home;
const Box = ({text, img, onPress}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.box} onPress={onPress}>
      <ImageBackground
        source={img}
        style={styles.image}
        imageStyle={{
          borderRadius: 10,
        }}>
        <Text style={styles.boxText}> {text} </Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'center',
    overflow: 'scroll',
  },
  row: {
    flex: 2,
    flexDirection: 'row',
  },
  column: {
    flex: 2,
    flexDirection: 'row',
  },
  box: {
    width: '45%',
    height: '21%',
    margin: 5,
  },
  boxText: {
    flex: 1,
    textAlign: 'center',
    fontSize: 25,
    padding: 15,
    color: '#fff',
    backgroundColor: 'rgba(0,0,0,0.4)',
    borderRadius: 10,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    borderRadius: 10,
  },
});
