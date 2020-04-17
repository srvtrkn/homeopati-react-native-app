import React from "react";
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  Image
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { createDrawerNavigator } from "@react-navigation/drawer";
import tabMenu from "./tabMenu";
const Drawer = createDrawerNavigator();

const CustomDrawerContent = props => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Image
            style={styles.headerImg}
            source={require("../images/profile.jpg")}
          />
        </View>
        <View>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Profile")}
          >
            <Text style={styles.headerText}>Dr. Hilmi Oğuz</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.menu}>
        <ScrollView style={{ marginTop: 20 }}>
          <MenuItem
            icon="home"
            to="Home"
            title="ANA SAYFA"
            navigation={props.navigation}
          />
          <MenuItem
            icon="search"
            to="Search"
            title="ARAMA"
            navigation={props.navigation}
          />
          <MenuItem
            icon="mortar-pestle"
            to="Diagnostics"
            title="TANILAR"
            navigation={props.navigation}
          />
          <MenuItem
            icon="users"
            to="Patients"
            title="HASTALAR"
            navigation={props.navigation}
          />
        </ScrollView>
      </View>
      <View style={styles.footer}>
        <MenuItem
          icon="sign-out-alt"
          to="SignIn"
          title="Çıkış Yap"
          navigation={props.navigation}
        />
        <Text style={styles.info}>Created by Servet Erkan</Text>
      </View>
    </View>
  );
};
const MenuItem = ({ icon, to, title, navigation }) => {
  return (
    <TouchableOpacity
      style={styles.menuItem}
      onPress={() => navigation.navigate(to)}
    >
      <Icon style={styles.tabItem} name={icon} size={20} />
      <Text style={[styles.menuText, { color: "#000" }]}>{title}</Text>
    </TouchableOpacity>
  );
};
export default (DrawerMenu = () => {
  return (
    <Drawer.Navigator
      screenOptions={{ headerShown: false, animationEnabled: false }}
      initialRouteName="Tab"
      drawerContent={props => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Tab" component={tabMenu} />
    </Drawer.Navigator>
  );
});
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FAE9"
  },
  header: {
    width: "100%",
    height: 75,
    alignItems: "center",
    borderBottomWidth: 2,
    borderBottomColor: "rgba(0,0,0,0.1)",
    flexDirection: "row",
    padding: 10
  },
  headerImg: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 10,
    color: "#51700B"
  },
  menu: {
    flex: 1
  },
  menuItem: {
    flexDirection: "row",
    margin: 15,
    alignItems: "center"
  },
  menuText: {
    fontSize: 20,
    marginLeft: 30
  },
  footer: {
    height: 100,
    borderTopWidth: 2,
    borderTopColor: "rgba(0,0,0,0.1)"
  },
  info: {
    position: "absolute",
    bottom: 10,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "rgba(0,0,0,0.3)"
  }
});
