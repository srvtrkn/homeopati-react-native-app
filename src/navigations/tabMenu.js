import React from "react";
import { Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome5";
import Home from "../home";
import search from "../search";
import diagnostics from "../diagnostics";
import patients from "../patients";
import profile from "../profile";
const Tab = createBottomTabNavigator();

export default (TabMenu = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "#6C960E",
        inactiveTintColor: "gray",
        size: 18
      }}
      screenOptions={{ headerShown: false, animationEnabled: false }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: ({ color }) => (
            <Text style={{ color: color, paddingBottom: 7 }}>Ana Sayfa</Text>
          ),
          tabBarIcon: ({ color }) => (
            <Icon name="home" color={color} size={18} />
          )
        }}
        tabBarOptions={{}}
      />

      <Tab.Screen
        name="Search"
        component={search}
        options={{
          tabBarLabel: ({ color }) => (
            <Text style={{ color: color, paddingBottom: 7 }}>Arama</Text>
          ),
          tabBarIcon: ({ color }) => (
            <Icon name="search" color={color} size={18} />
          )
        }}
      />
      <Tab.Screen
        name="Diagnostics"
        component={diagnostics}
        options={{
          tabBarLabel: ({ color }) => (
            <Text style={{ color: color, paddingBottom: 7 }}>Tanılar</Text>
          ),
          tabBarIcon: ({ color }) => (
            <Icon name="mortar-pestle" color={color} size={18} />
          )
        }}
      />
      <Tab.Screen
        name="Patients"
        component={patients}
        options={{
          tabBarLabel: ({ color }) => (
            <Text style={{ color: color, paddingBottom: 7 }}>Hastalar</Text>
          ),
          tabBarIcon: ({ color }) => (
            <Icon name="users" color={color} size={18} />
          )
        }}
      />
      <Tab.Screen
        name="Profile"
        component={profile}
        options={{
          tabBarLabel: ({ color }) => (
            <Text style={{ color: color, paddingBottom: 7 }}>Profilim</Text>
          ),
          tabBarIcon: ({ color }) => (
            <Icon name="user" color={color} size={18} />
          )
        }}
      />
    </Tab.Navigator>
  );
});
