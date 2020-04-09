import React, {useEffect, useRef, useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
Home = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.boxText}>HOMEOPATI</Text>
      </View>
      <View style={styles.column}>
        <View style={styles.row}>
          <View style={styles.box}>
            <Text style={styles.boxText}>Seat of the Symptoms</Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.boxText}>Moral and Intellectual Faculties</Text>
          </View>
        </View>
      </View>
      <View style={styles.column}>
        <View style={styles.row}>
          <View style={styles.box}>
            <Text style={styles.boxText}>Organs and Their Functions</Text>
          </View>
          <View style={styles.box}></View>
        </View>
      </View>
      <View style={styles.column}>
        <View style={styles.row}>
          <View style={styles.box}></View>
          <View style={styles.box}></View>
        </View>
      </View>
      <View style={styles.column}>
        <View style={styles.row}>
          <View style={styles.box}></View>
          <View style={styles.box}></View>
        </View>
      </View>
      <View style={styles.navigation}>
        <TouchableOpacity
          style={styles.tab}
          onPress={() => navigation.navigate('Home')}>
          <Icon style={styles.tabItem} name="home" color="#94cd13" size={18} />
          <Text style={styles.tabItem}>Ana Sayfa</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tab}
          onPress={() => navigation.navigate('SignIn')}>
          <Icon style={styles.tabItem} name="search" color="#000" size={18} />
          <Text style={styles.tabItem}>Arama</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tab}
          onPress={() => navigation.navigate('SignIn')}>
          <Icon style={styles.tabItem} name="mortar-pestle" size={18} />
          <Text style={styles.tabItem}>Tanılar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tab}
          onPress={() => navigation.navigate('SignIn')}>
          <Icon style={styles.tabItem} name="users" color="#000" size={18} />
          <Text style={styles.tabItem}>Hastalar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tab}
          onPress={() => navigation.navigate('Profile')}>
          <Icon style={styles.tabItem} name="user" color="#000" size={18} />
          <Text style={styles.tabItem}>Profilim</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    flex: 2,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    backgroundColor: '#99CA93',
    borderRadius: 10,
    margin: 5,
    justifyContent: 'center',
  },
  boxText: {
    textAlign: 'center',
    fontSize: 30,
    color: '#fff',
  },
  header: {
    backgroundColor: '#94cd13',
    width: '100%',
    height: 50,
    justifyContent: 'center',
  },
  navigation: {
    width: '100%',
    height: 60,
    bottom: 0,
    borderTopColor: '#ddd',
    borderTopWidth: 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  tab: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  tabItem: {
    flex: 1,
    textAlign: 'center',
    padding: 5,
  },
});
