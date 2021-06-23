import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";

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

      <ScrollView
        scrollEventThrottle={16}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        <View style={{ height: 130, marginTop: 20 }}>
          <ScrollView>
            <View
              style={{
                height: 130,
                width: 130,
                marginLeft: 20,
                borderWidt: 0.5,
                borderColor: "#ddddd",
              }}
            >
              <View style={{ flex: 2 }}>
                <Image
                  source={require("../public/nuez.png")}
                  style={{
                    flex: 1,
                    width: null,
                    height: null,
                    resizeMode: "cover",
                  }}
                />
                <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
                  <Text>NUEZ</Text>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
        <View style={{ height: 130, marginTop: 20 }}>
          <ScrollView>
            <View
              style={{
                height: 130,
                width: 130,
                marginLeft: 20,
                borderWidt: 0.5,
                borderColor: "#ddddd",
              }}
            >
              <View style={{ flex: 2 }}>
                <Image
                  source={require("../public/Blanco.jpg")}
                  style={{
                    flex: 1,
                    width: null,
                    height: null,
                    resizeMode: "cover",
                  }}
                />
                <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
                  <Text>Chocolate Blanco</Text>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
        <View style={{ height: 130, marginTop: 20 }}>
          <ScrollView>
            <View
              style={{
                height: 130,
                width: 130,
                marginLeft: 20,
                borderWidt: 0.5,
                borderColor: "#ddddd",
              }}
            >
              <View style={{ flex: 2 }}>
                <Image
                  source={require("../public/vainilla.jpg")}
                  style={{
                    flex: 1,
                    width: null,
                    height: null,
                    resizeMode: "cover",
                  }}
                />
                <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
                  <Text>Vainilla</Text>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
        <View style={{ height: 130, marginTop: 20 }}>
          <ScrollView>
            <View
              style={{
                height: 130,
                width: 130,
                marginLeft: 20,
                borderWidt: 0.5,
                borderColor: "#ddddd",
              }}
            >
              <View style={{ flex: 2 }}>
                <Image
                  source={require("../public/caramelo.jpg")}
                  style={{
                    flex: 1,
                    width: null,
                    height: null,
                    resizeMode: "cover",
                  }}
                />
                <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
                  <Text>Caramelo</Text>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
        <View style={{ height: 130, marginTop: 20 }}>
          <ScrollView>
            <View
              style={{
                height: 130,
                width: 130,
                marginLeft: 20,
                borderWidt: 0.5,
                borderColor: "#ddddd",
              }}
            >
              <View style={{ flex: 2 }}>
                <Image
                  source={require("../public/Chocolate.jpg")}
                  style={{
                    flex: 1,
                    width: null,
                    height: null,
                    resizeMode: "cover",
                  }}
                />
                <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
                  <Text>Chocolate</Text>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </ScrollView>

      <View style={styles.containerDescription}>
        <Text style={styles.About}>Quienes somos?</Text>
        <Text style={styles.info}>
          Esta aplicación permite hacer pedidos de todos los tipos de trufas que
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
