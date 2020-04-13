import React from 'react';
import AppContainer from './appContainer';
import {
  View,
  StyleSheet,
  Image,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native';

const data = Array.from({length: 50}, (_v, k) => {
  return {
    id: k + 1,
    name: 'xyz hakkında katalog',
    color:
      '#' +
      Math.random()
        .toString(16)
        .substr(-6),
  };
});
export default (Profile = () => {
  return (
    <AppContainer>
      <View style={styles.container}>
        <View style={styles.imgContainer}>
          <Image style={styles.img} source={require('./images/profile.jpg')} />
          <Text style={styles.text}>Dr. Hilmi Oğuz</Text>
        </View>
        <View style={styles.tabContainer}>
          <TouchableOpacity style={styles.tab}>
            <Text style={styles.tabText}>Kataloglar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tab}>
            <Text style={styles.tabText}>İlaçlar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tab}>
            <Text style={styles.tabText}>Ayarlar</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.itemContainer}>
          <FlatList
            data={data}
            renderItem={i => (
              <TouchableOpacity
                key={i.item.id.toString()}
                style={[styles.box, {backgroundColor: i.item.color}]}>
                <Text style={styles.boxText}>{i.item.name}</Text>
              </TouchableOpacity>
            )}
            keyExtractor={item => item.id.toString()}
            numColumns={3}
            showsVerticalScrollIndicator={false}
            style={styles.flatlist}
          />
        </View>
      </View>
    </AppContainer>
  );
});
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  imgContainer: {
    flex: 2,
    backgroundColor: '#94cd13',
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 124,
    height: 124,
    borderRadius: 62,
  },
  text: {
    color: '#fff',
    fontSize: 35,
  },
  tabContainer: {
    height: 50,
    width: '100%',
    backgroundColor: '#EBF5D4',
    borderBottomColor: '#94cd13',
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  tab: {
    minWidth: '30%',
    top: 10,
  },
  tabText: {
    textAlign: 'center',
    fontSize: 20,
    color: '#5F830D',
  },
  itemContainer: {
    flex: 3,
  },
  flatlist: {
    marginVertical: 10,
    marginHorizontal: 10,
  },
  box: {
    flex: 1,
    height: 120,
    margin: 5,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxText: {
    textAlign: 'center',
    fontSize: 20,
    width: '60%',
    color: '#fff',
  },
});
