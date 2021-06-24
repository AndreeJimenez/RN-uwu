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

import caramelo from "../Views/controllers/Caramelo";
import blanco from "../Views/controllers/Blanco";
import chocolate from "../Views/controllers/Chocolate";
import nuez from "../Views/controllers/Nuez";
import vainilla from "../Views/controllers/Vainilla";
export const CartScreen = ({ navigation }) => {
  const { TrufaCaramelo, ComprarCaremelo } = caramelo();
  const { TrufaBlanco, ComprarBlanco } = blanco();
  const { TrufaChocolate, ComprarChocolate } = chocolate();
  const { TrufaNuez, ComprarNuez } = nuez();
  const { TrufaVainilla, ComprarVainilla } = vainilla();
  return (
    <SafeAreaView>
      <Text style={styles.TxtPrincipal}>Carrito de Compras</Text>
      <View style={{ height: "50%" }}>
        <ScrollView>
          <View
            style={[TrufaCaramelo == 0 ? styles.Clean : styles.containerCart]}
          >
            <Image
              style={styles.imagesTrufa}
              source={{
                uri: require("../public/caramelo.jpg"),
              }}
            />
            <View style={styles.containerImg}>
              <Text style={styles.txtCart}>Caramelo</Text>
              <Text>-</Text>
              <Text>{TrufaCaramelo}</Text>
              <Text>+</Text>
            </View>
          </View>

          <View
            style={[TrufaBlanco == 0 ? styles.Clean : styles.containerCart]}
          >
            <Image
              style={styles.imagesTrufa}
              source={{
                uri: require("../public/Blanco.jpg"),
              }}
            />
            <View style={styles.containerImg}>
              <Text style={styles.txtCart}>Chocolate Blanco</Text>
              <Text>-</Text>
              <Text>{TrufaBlanco}</Text>
              <Text>+</Text>
            </View>
          </View>

          <View
            style={[TrufaChocolate == 0 ? styles.Clean : styles.containerCart]}
          >
            <Image
              style={styles.imagesTrufa}
              source={{
                uri: require("../public/Chocolate.jpg"),
              }}
            />
            <View style={styles.containerImg}>
              <Text style={styles.txtCart}>Chocolate </Text>
              <Text>-</Text>
              <Text>{TrufaChocolate}</Text>
              <Text>+</Text>
            </View>
          </View>

          <View style={[TrufaNuez == 0 ? styles.Clean : styles.containerCart]}>
            <Image
              style={styles.imagesTrufa}
              source={{
                uri: require("../public/nuez.png"),
              }}
            />
            <View style={styles.containerImg}>
              <Text style={styles.txtCart}>Nuez</Text>
              <Text>-</Text>
              <Text>{TrufaNuez}</Text>
              <Text>+</Text>
            </View>
          </View>

          <View
            style={[TrufaVainilla == 0 ? styles.Clean : styles.containerCart]}
          >
            <Image
              style={styles.imagesTrufa}
              source={{
                uri: require("../public/vainilla.jpg"),
              }}
            />
            <View style={styles.containerImg}>
              <Text style={styles.txtCart}>Vainilla</Text>
              <Text>-</Text>
              <Text>{TrufaVainilla}</Text>
              <Text>+</Text>
            </View>
          </View>
        </ScrollView>
      </View>

      <View style={styles.containerTotal}>
        <Text style={styles.txtTotal}>
          {`Su total es de : ${
            TrufaCaramelo * 140 +
            TrufaChocolate * 70 +
            TrufaBlanco * 100 +
            TrufaNuez * 120 +
            TrufaVainilla * 130
          }$`}
        </Text>
      </View>
      <TouchableOpacity style={styles.btnBuy}>
        <Text style={styles.txtBuy} onPress={() => navigation.navigate("Pago")}>
          Comprar
        </Text>
      </TouchableOpacity>
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
    marginTop: 50,
    marginHorizontal: 40,
    height: 50,
    borderWidth: 1,
    borderColor: "black",
  },
  txtTotal: {
    fontSize: 25,
    textAlign: "center",
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
  Clean: {
    display: "none",
  },
});
