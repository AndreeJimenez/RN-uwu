import React from "react";
import { View, Text, SafeAreaView, StyleSheet, Image } from "react-native";

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <View style={styles.containerImg}>
        <Image
          style={styles.imgTrufa}
          source={{
            uri: require("../public/trufas3.png"),
          }}
        />
      </View>
      <Text style={styles.titleTrufas}>Trufas León</Text>

      <View style={styles.containerSlider}>
        <Text>Aqui va un slider</Text>
      </View>
      <View style={styles.containerDescription}>
        <Text style={styles.About}>Quienes somos?</Text>
        <Text style={styles.info}>
          sta aplicación permite hacer pedidos de todos los tipos de trufas que
          se manejan para después ser enviados a nivel estatal, esto con la
          finalidad de que el producto esté recién preparado y mantenga su
          sabor.
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containerImg: {
    alignItems: "center",
  },
  imgTrufa: {
    width: "100%",
    height: 300,

    marginHorizontal: 100,
  },
  titleTrufas: {
    fontSize: 30,
    marginTop: 10,
    marginHorizontal: 15,
  },
  containerSlider: {
    backgroundColor: "green",
    height: 100,
    marginVertical: 50,
  },

  About: {
    fontSize: 32,
    marginVertical: 20,
    marginHorizontal: 15,
  },
  info: {
    fontSize: 17,
    marginHorizontal: 12,
  },
});
