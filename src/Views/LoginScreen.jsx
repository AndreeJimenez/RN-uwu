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
  const [email, onChangeEmail] = React.useState("Email");
  const [password, onChangePassword] = React.useState("Password");

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
          <Text style={styles.txtLogin}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnRegister}
          onPress={() => navigation.navigate("Register")}
        >
          <Text style={styles.txtRegister}>Register</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

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
  containerText: {
    marginVertical: 65,
    borderWidth: 5,
    borderColor: "green",
  },
  Text: {
    padding: 15,
    borderWidth: 2,
    borderColor: "black",
  },
  containerButtons: {
    borderWidth: 5,
    borderColor: "black",
  },
  btnLogin: { height: 50, backgroundColor: "red", textAlign: "center" },
  txtLogin: {
    color: "yellow",
    fontSize: 15,
    textAlign: "center",
    paddingTop: 15,
  },
  txtRegister: {
    color: "yellow",
  },

  btnRegister: {
    textAlign: "center",
    height: 20,
    backgroundColor: "#841584",
  },
});
