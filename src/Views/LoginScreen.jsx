/*  onPress={() => navigation.navigate("Home")} */
import React from "react";
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  SafeAreaView,
} from "react-native";
export const LoginScreen = ({ navigation }) => {
  const [email, onChangeEmail] = React.useState("CORREO ELECTRONICO");
  const [password, onChangePassword] = React.useState("CONTRASEÑA");

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
      <View style={styles.containerText}>
        <TextInput
          style={styles.Text}
          onChangeText={onChangeEmail}
          value={email}
        />
        <TextInput
          style={styles.Text}
          onChangeText={onChangePassword}
          value={password}
        />
      </View>
      <View style={styles.containerButtons}>
        <TouchableOpacity
          style={styles.btnLogin}
          onPress={() => navigation.navigate("Home")}
        >
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
});
