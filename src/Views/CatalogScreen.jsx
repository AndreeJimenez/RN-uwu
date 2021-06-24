import React, { useRef } from "react";
import {
  Animated,
  Button,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  SafeAreaView,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { ScrollView } from "react-native-gesture-handler";

import caramelo from "../Views/controllers/Caramelo";
import blanco from "../Views/controllers/Blanco";
import chocolate from "../Views/controllers/Chocolate";
import nuez from "../Views/controllers/Nuez";
import vainilla from "../Views/controllers/Vainilla";
function HomeScreen({ navigation }) {
  return (
    <ScrollView>
      <View>
        <TouchableOpacity
          style={styles.containerImg}
          onPress={() => navigation.navigate("Caramelo")}
        >
          <Image
            style={styles.imgTrufa}
            source={{ uri: require("../public/caramelo.jpg") }}
          />
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          style={styles.containerImg}
          onPress={() => navigation.navigate("Blanco")}
        >
          <Image
            style={styles.imgTrufa}
            source={{ uri: require("../public/Blanco.jpg") }}
          />
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          style={styles.containerImg}
          onPress={() => navigation.navigate("Chocolate")}
        >
          <Image
            style={styles.imgTrufa}
            source={{ uri: require("../public/Chocolate.jpg") }}
          />
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          style={styles.containerImg}
          onPress={() => navigation.navigate("Nuez")}
        >
          <Image
            style={styles.imgTrufa}
            source={{ uri: require("../public/nuez.png") }}
          />
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          style={styles.containerImg}
          onPress={() => navigation.navigate("Vainilla")}
        >
          <Image
            style={styles.imgTrufa}
            source={{ uri: require("../public/vainilla.jpg") }}
          />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

function TrufaCaramelo({ navigation }) {
  const { TrufaCaramelo, ComprarCaramelo } = caramelo();
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 3000,
    }).start();
  };

  const fadeOut = () => {
    // Will change fadeAnim value to 0 in 3 seconds
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 3000,
    }).start();
  };

  return (
    <View style={styles2.containerImg2}>
      <Image
        style={styles2.imgTrufa2}
        source={{
          uri: require("../public/caramelo.jpg"),
        }}
      />

      <View>
        <Text style={styles2.About}>Trufa sabor caramelo</Text>
        <Text style={styles2.info}>
          Esta aplicación permite hacer pedidos de todos los tipos de trufas que
          se manejan para después ser enviados a nivel estatal, esto con la
          finalidad de que el producto esté recién preparado y mantenga su
          sabor.
        </Text>
        <SafeAreaView style={styles.container}>
          <Animated.View
            style={[
              styles.fadingContainer,
              {
                // Bind opacity to animated value
                opacity: fadeAnim,
              },
            ]}
          >
            <Text style={styles.fadingText}>Trufa agregada</Text>
          </Animated.View>
        </SafeAreaView>
        <TouchableOpacity
          style={styles2.btnBuy}
          onPress={() => {
            ComprarCaramelo();
            fadeIn();

            setTimeout(() => {
              fadeOut();
            }, 2000);
          }}
        >
          <Text style={styles2.txtBuy}>Añadir al carrito</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
function TrufaBlanca({ navigation }) {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 3000,
    }).start();
  };

  const fadeOut = () => {
    // Will change fadeAnim value to 0 in 3 seconds
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 3000,
    }).start();
  };

  const { TrufaBlanco, ComprarBlanco } = blanco();
  return (
    <View style={styles2.containerImg2}>
      <Image
        style={styles2.imgTrufa2}
        source={{
          uri: require("../public/Blanco.jpg"),
        }}
      />

      <View>
        <Text style={styles2.About}>Trufa Chocolate Blanco</Text>
        <Text style={styles2.info}>
          Esta aplicación permite hacer pedidos de todos los tipos de trufas que
          se manejan para después ser enviados a nivel estatal, esto con la
          finalidad de que el producto esté recién preparado y mantenga su
          sabor.
        </Text>
        <SafeAreaView style={styles.container}>
          <Animated.View
            style={[
              styles.fadingContainer,
              {
                // Bind opacity to animated value
                opacity: fadeAnim,
              },
            ]}
          >
            <Text style={styles.fadingText}>Trufa agregada</Text>
          </Animated.View>
        </SafeAreaView>
        <TouchableOpacity
          style={styles2.btnBuy}
          onPress={() => {
            ComprarBlanco();
            fadeIn();
            setTimeout(() => {
              fadeOut();
            }, 2000);
          }}
        >
          <Text style={styles2.txtBuy}>Añadir al carrito</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function TrufaChocolate({ navigation }) {
  const { TrufaChocolate, ComprarChocolate } = chocolate();
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 3000,
    }).start();
  };

  const fadeOut = () => {
    // Will change fadeAnim value to 0 in 3 seconds
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 3000,
    }).start();
  };
  return (
    <View style={styles2.containerImg2}>
      <Image
        style={styles2.imgTrufa2}
        source={{
          uri: require("../public/Chocolate.jpg"),
        }}
      />

      <View>
        <Text style={styles2.About}>Trufa sabor Chocolate</Text>
        <Text style={styles2.info}>
          Esta aplicación permite hacer pedidos de todos los tipos de trufas que
          se manejan para después ser enviados a nivel estatal, esto con la
          finalidad de que el producto esté recién preparado y mantenga su
          sabor.
        </Text>
        <SafeAreaView style={styles.container}>
          <Animated.View
            style={[
              styles.fadingContainer,
              {
                // Bind opacity to animated value
                opacity: fadeAnim,
              },
            ]}
          >
            <Text style={styles.fadingText}>Trufa agregada</Text>
          </Animated.View>
        </SafeAreaView>
        <TouchableOpacity
          style={styles2.btnBuy}
          onPress={() => {
            ComprarChocolate();
            fadeIn();
            setTimeout(() => {
              fadeOut();
            }, 2000);
          }}
        >
          <Text style={styles2.txtBuy}>Añadir al carrito</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
function TrufaNuez({ navigation }) {
  const { TrufaNuez, ComprarNuez } = nuez();
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 3000,
    }).start();
  };

  const fadeOut = () => {
    // Will change fadeAnim value to 0 in 3 seconds
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 3000,
    }).start();
  };

  return (
    <View style={styles2.containerImg2}>
      <Image
        style={styles2.imgTrufa2}
        source={{
          uri: require("../public/nuez.png"),
        }}
      />

      <View>
        <Text style={styles2.About}>Trufa sabor nuez</Text>
        <Text style={styles2.info}>
          Esta aplicación permite hacer pedidos de todos los tipos de trufas que
          se manejan para después ser enviados a nivel estatal, esto con la
          finalidad de que el producto esté recién preparado y mantenga su
          sabor.
        </Text>
        <SafeAreaView style={styles.container}>
          <Animated.View
            style={[
              styles.fadingContainer,
              {
                // Bind opacity to animated value
                opacity: fadeAnim,
              },
            ]}
          >
            <Text style={styles.fadingText}>Trufa agregada</Text>
          </Animated.View>
        </SafeAreaView>
        <TouchableOpacity
          style={styles2.btnBuy}
          onPress={() => {
            ComprarNuez();
            fadeIn();
            setTimeout(() => {
              fadeOut();
            }, 2000);
          }}
        >
          <Text style={styles2.txtBuy}>Añadir al carrito</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
function TrufaVainilla({ navigation }) {
  const { TrufaVainilla, ComprarVainilla } = vainilla();
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 3000,
    }).start();
  };

  const fadeOut = () => {
    // Will change fadeAnim value to 0 in 3 seconds
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 3000,
    }).start();
  };

  return (
    <View style={styles2.containerImg2}>
      <Image
        style={styles2.imgTrufa2}
        source={{
          uri: require("../public/vainilla.jpg"),
        }}
      />

      <View>
        <Text style={styles2.About}>Trufa sabor vainilla</Text>
        <Text style={styles2.info}>
          Esta aplicación permite hacer pedidos de todos los tipos de trufas que
          se manejan para después ser enviados a nivel estatal, esto con la
          finalidad de que el producto esté recién preparado y mantenga su
          sabor.
        </Text>
        <SafeAreaView style={styles.container}>
          <Animated.View
            style={[
              styles.fadingContainer,
              {
                // Bind opacity to animated value
                opacity: fadeAnim,
              },
            ]}
          >
            <Text style={styles.fadingText}>Trufa agregada</Text>
          </Animated.View>
        </SafeAreaView>
        <TouchableOpacity
          style={styles2.btnBuy}
          onPress={() => {
            ComprarVainilla();
            fadeIn();
            setTimeout(() => {
              fadeOut();
            }, 2000);
          }}
        >
          <Text style={styles2.txtBuy}>Añadir al carrito</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const Stack = createStackNavigator();

function CatalogScreen() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Blanco" component={TrufaBlanca} />
        <Stack.Screen name="Caramelo" component={TrufaCaramelo} />
        <Stack.Screen name="Chocolate" component={TrufaChocolate} />
        <Stack.Screen name="Nuez" component={TrufaNuez} />
        <Stack.Screen name="Vainilla" component={TrufaVainilla} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default CatalogScreen;

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
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  fadingContainer: {
    padding: 20,
    backgroundColor: "powderblue",
  },
  fadingText: {
    fontSize: 28,
  },
  buttonRow: {
    flexBasis: 100,
    justifyContent: "space-evenly",
    marginVertical: 16,
  },
});

const styles2 = StyleSheet.create({
  containerImg2: {
    alignItems: "center",
  },
  imgTrufa2: {
    width: "100%",
    height: 300,
    marginHorizontal: 100,
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
  btnBuy: {
    marginTop: 80,
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
