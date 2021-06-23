import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  SafeAreaView,
  Button,
} from "react-native";
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native-gesture-handler";

import { Coria } from "../hook";

export const CartScreen = () => {
  const { count, increase } = Coria();

  return (
    <SafeAreaView>
      <Text style={styles.TxtPrincipal}>Carrito de Compras</Text>
      <ScrollView>
        <View style={styles.containerCart}>
          <Image
            style={styles.imagesTrufa}
            source={{
              uri: require("../public/trufas.jpg"),
            }}
          />
          <View style={styles.containerImg}>
            <Text style={styles.txtCart}>Chocolate</Text>
            <Text>-</Text>
            <Text>4</Text>
            <Text>+</Text>
          </View>
        </View>

        <View style={styles.containerCart}>
          <Image
            style={styles.imagesTrufa}
            source={{
              uri: require("../public/trufas.jpg"),
            }}
          />
          <View style={styles.containerImg}>
            <Text style={styles.txtCart}>Chocolate Blanco</Text>
            <Text>-</Text>
            <Text>4</Text>
            <Text>+</Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles.containerTotal}>
        <TextInput style={styles.txtTotal} value={"Total: $$$"}></TextInput>
      </View>
      <TouchableOpacity style={styles.btnBuy} onPress={() => increase()}>
        <Text style={styles.txtBuy}>Comprar</Text>
      </TouchableOpacity>

      <Text>{count}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  TxtPrincipal: {
    fontSize: 30,
    fontWeight: 700,
    width: "100%",
  },
  containerCart: {
    marginTop: 20,
    width: "100%",
    height: 100,
    flexDirection: "row",
  },
  containerImg: {
    with: "100%",
  },
  imagesTrufa: {
    width: "45%",
    height: "100%",
  },
  txtCart: {
    textAlign: "center",
    fontSize: 23,
  },
  containerTotal: {
    marginTop: 300,
    marginHorizontal: 40,
    height: 50,
    borderWidth: 1,
    borderColor: "black",
  },
  txtTotal: {
    fontSize: 15,
    textAlign: "left",
  },
  btnBuy: {
    marginTop: 25,
    height: 50,
    backgroundColor: "#F4F4F4",
    textAlign: "center",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "black",
    marginHorizontal: 40,
  },
  txtBuy: {
    color: "black",
    fontSize: 15,
    textAlign: "center",
    paddingTop: 15,
  },
});
