import React from "react";
import { ScrollView, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Product1 } from "./TrufasView/Product1";
import { Product2 } from "./TrufasView/Product2";
import { Product3 } from "./TrufasView/Product3";
import { Product4 } from "./TrufasView/Product4";
import { Product5 } from "./TrufasView/Product5";
import { Product6 } from "./TrufasView/Product6";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export const CatalogScreen = ({ navigation }) => {
  return (
    <ScrollView>
      <TouchableOpacity
        style={styles.containerImg}
        onPress={() => navigation.navigate("Product1")}
      >
        <Image
          style={styles.imgTrufa}
          source={{ uri: require("../public/Blanco.jpg") }}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.containerImg}
        onPress={() => navigation.navigate("Product2")}
      >
        <Image
          style={styles.imgTrufa}
          source={{ uri: require("../public/caramelo.jpg") }}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.containerImg}
        onPress={() => navigation.navigate("Product3")}
      >
        <Image
          style={styles.imgTrufa}
          source={{ uri: require("../public/Chocolate.jpg") }}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.containerImg}
        onPress={() => navigation.navigate("Product4")}
      >
        <Image
          style={styles.imgTrufa}
          source={{ uri: require("../public/nuez.png") }}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.containerImg}
        onPress={() => navigation.navigate("Product5")}
      >
        <Image
          style={styles.imgTrufa}
          source={{ uri: require("../public/vainilla.jpg") }}
        />
      </TouchableOpacity>

      <NavigationContainer independent={true}>
        <Stack.Navigator>
          <Stack.Screen name="Product1" component={Product1} />
          <Stack.Screen name="Product2" component={Product2} />
          <Stack.Screen name="Product3" component={Product3} />
          <Stack.Screen name="Product4" component={Product4} />
          <Stack.Screen name="Product5" component={Product5} />
          <Stack.Screen name="Product6" component={Product6} />
        </Stack.Navigator>
      </NavigationContainer>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  containerImg: {
    width: "100%",
    height: "20%",
    marginHorizontal: 2,
    marginVertical: 3,
  },
  imgTrufa: {
    width: "100%",
    height: 200,
    borderRadius: 30,
  },
});
