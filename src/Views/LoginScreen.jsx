/*  onPress={() => navigation.navigate("Home")} */
import React, { useEffect, useRef } from "react";
import {
  Button,
  Animated,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import axios from "axios";
export const LoginScreen = ({ navigation }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 3000,
    }).start();
  };

  /* const [email, onChangeEmail] = React.useState("test1@gmail.com");
  const [password, onChangePassword] = React.useState("Juan"); */
  let lista = [];
  let email = "";
  let password = "";
  const baseUrl = "http://localhost:4000/users";

  const getUsers = async () => {
    try {
      const response = await axios.get(baseUrl);
      const { data } = response;
      lista = data;
      console.log(data);
      console.log(lista);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  const Comparar = async () => {
    let _email = email;
    let _password = password;
    console.log(_email, _password);
    for (let i = 0; i < lista.length; i++) {
      console.log(lista[i].email, lista[i].password);
      if (lista[i].email === _email && lista[i].password === _password) {
        console.log("datos correctos");
        await fadeIn();
        setTimeout(() => {
          navigation.navigate("Home");
        }, 3000);

        return;
      }
    }
    console.log("datos incorrectos");
    /* console.log(email, password); */
  };

  return (
    <SafeAreaView>
      <View style={styles.containerImg}>
        <Image
          style={styles.imgTrufa}
          source={{
            uri: require("../public/trufas3x.png"),
          }}
        />
      </View>
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
          <Text style={styles.fadingText}>Bienvenido</Text>
        </Animated.View>
      </SafeAreaView>
      <View style={styles.containerText}>
        <TextInput
          style={styles.Text}
          onChangeText={(value) => {
            email = value;
          }}
          placeholder={"Email"}
        />
        <TextInput
          style={styles.Text}
          onChangeText={(value) => {
            password = value;
          }}
          placeholder={"Password"}
        />
      </View>
      <View style={styles.containerButtons}>
        <TouchableOpacity style={styles.btnLogin} onPress={() => Comparar()}>
          <Text style={styles.txtLogin}>Iniciar Sesion</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnRegister}
          onPress={() => navigation.navigate("Register")}
        >
          <Text style={styles.txtRegister}>REGISTRARSE</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  containerImg: {
    backgroundColor: "blue",
    alignItems: "center",
  },
  imgTrufa: {
    width: "100%",
    height: 300,
    marginHorizontal: 100,
  },
  containerText: {
    marginVertical: 65,
  },
  Text: {
    textAlign: "center",
    marginHorizontal: 40,
    marginVertical: 15,
    padding: 15,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 20,
  },
  containerButtons: {},
  btnLogin: {
    height: 50,
    backgroundColor: "#F4F4F4",
    textAlign: "center",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "black",
    marginHorizontal: 40,
  },
  txtLogin: {
    color: "black",
    fontSize: 15,
    textAlign: "center",
    paddingTop: 15,
  },
  txtRegister: {
    color: "black",
  },

  btnRegister: {
    textAlign: "center",
    height: 20,

    marginTop: 15,
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
