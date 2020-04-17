import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  ActivityIndicator,
  StatusBar,
  KeyboardAvoidingView,
  Platform
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { useNavigation, DrawerActions } from "@react-navigation/native";
AppContainer = ({ children, header, showTab = true, loading = false }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Loading show={loading} />
      {header && (
        <View style={styles.header}>
          <TouchableOpacity
            style={{ marginLeft: 20, zIndex: 1000 }}
            onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
          >
            <Icon name="bars" color="#51700B" size={30} />
          </TouchableOpacity>
          <Text style={styles.headerText}>{header}</Text>
        </View>
      )}
      <KeyboardAvoidingView
        behavior={Platform.Os == "ios" ? "padding" : "height"}
        style={styles.container}
      >
        {children}
      </KeyboardAvoidingView>
    </View>
  );
};
export default AppContainer;
const Loading = ({ show }) => {
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
    flex: 1
  },
  header: {
    backgroundColor: "#94cd13",
    width: "100%",
    height: 50,
    alignItems: "center",
    flexDirection: "row"
  },
  headerText: {
    flex: 1,
    textAlign: "center",
    fontSize: 30,
    color: "#fff",
    marginLeft: -50
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    zIndex: 1000,
    backgroundColor: "rgba(0,0,0,0.6)"
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  }
});
