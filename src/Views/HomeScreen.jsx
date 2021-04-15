import React from "react";
import { View, Text, SafeAreaView, StyleSheet, Image } from "react-native";

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <View style={styles.containerImg}>
        <Image
          style={styles.imgTrufa}
          source={{
            uri: require("../public/trufas.jpg"),
          }}
        />
      </View>
      <View style={styles.containerSlider}>
        <Text>Aqui va un slider</Text>
      </View>
      <View style={styles.containerDescription}>
        <Text>Aqui va la descripcion de la empresa</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containerImg: {
    borderColor: "red",
    backgroundColor: "blue",
    borderWidth: 5,
    alignItems: "center",
  },
  imgTrufa: {
    width: 250,
    height: 300,
    borderWidth: 10,
    marginHorizontal: 100,
  },
  containerSlider: {
    backgroundColor: "green",
    height: 100,
    marginVertical: 50,
  },
  containerDescription: {
    backgroundColor: "pink",
    height: 100,
  },
});
