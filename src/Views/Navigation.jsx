import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { CartScreen } from "./CartScreen";
import { CatalogScreen } from "./CatalogScreen";
import HomeScreen from "./HomeScreen";
import { StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const SettingsStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="A"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
    </HomeStack.Navigator>
  );
}

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen
        name="B"
        component={CatalogScreen}
        options={{
          headerShown: false,
        }}
      />
    </SettingsStack.Navigator>
  );
}
function SettingsStackScreen2() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen
        name="B"
        component={CartScreen}
        options={{
          headerShown: false,
        }}
      />
    </SettingsStack.Navigator>
  );
}

export default function Navigation() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "#c0B283",
        style: {
          backgroundColor: "#373737",
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{ tabBarLabel: "Home" }}
      />
      <Tab.Screen
        name="Products"
        component={SettingsStackScreen}
        options={{ tabBarLabel: "Products" }}
      />
      <Tab.Screen
        name="Cart"
        component={SettingsStackScreen2}
        options={{ tabBarLabel: "Cart" }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  navigator: {
    backgroundColor: "#373737",
  },
});
