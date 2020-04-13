import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  ActivityIndicator,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';
AppContainer = ({children, header, showTab = true, loading = false}) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Loading show={loading} />
      {header && (
        <View style={styles.header}>
          <Text style={styles.headerText}>{header}</Text>
        </View>
      )}
      <KeyboardAvoidingView
        behavior={Platform.Os == 'ios' ? 'padding' : 'height'}
        style={styles.container}>
        {children}
      </KeyboardAvoidingView>
      {showTab && (
        <View style={styles.navigation}>
          <TabItem icon="home" title="Ana Sayfa" onPress="Home" />
          <TabItem icon="search" title="Arama" onPress="SignIn" />
          <TabItem icon="mortar-pestle" title="Tanılar" onPress="SignIn" />
          <TabItem icon="users" title="Hastalar" onPress="Patients" />
          <TabItem icon="user" title="Profilim" onPress="Profile" />
        </View>
      )}
    </View>
  );
};
export default AppContainer;
const TabItem = ({icon, onPress, title}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.tab}
      onPress={() => navigation.navigate(onPress)}>
      <Icon style={styles.tabItem} name={icon} color="#000" size={18} />
      <Text style={[styles.tabItem, {color: '#000'}]}>{title}</Text>
    </TouchableOpacity>
  );
};
const Loading = ({show}) => {
  return (
    <Modal animationType="none" transparent visible={show}>
      <View style={[styles.loadingContainer, styles.horizontal]}>
        <ActivityIndicator size="large" color="#fff" />
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#94cd13',
    width: '100%',
    height: 50,
    justifyContent: 'center',
  },
  headerText: {
    textAlign: 'center',
    fontSize: 30,
    color: '#fff',
  },
  navigation: {
    width: '100%',
    height: 60,
    bottom: 0,
    borderTopColor: '#ddd',
    borderTopWidth: 2,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(200,200,200,0.4)',
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
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    zIndex: 1000,
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});
