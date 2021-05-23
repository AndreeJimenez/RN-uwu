import React from "react";
import {
  SafeAreaView,
  TextInput,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
} from "react-native";
export const RegisterScreen = () => {
  const [email, onChangeEmail] = React.useState("Email");
  const [password, onChangePassword] = React.useState("Password");
  const [name, onChangeName] = React.useState("Name");
  const [phone, onChangePhone] = React.useState("Phone");
  const [direction, onChangeDirection] = React.useState("Direction");

  return (
    <SafeAreaView>
      <View>
        <TextInput
          style={styles.Text}
          onChangeText={onChangeName}
          value={name}
        />
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
        <TextInput
          style={styles.Text}
          onChangeText={onChangePhone}
          value={phone}
        />
        <TextInput
          style={styles.Text}
          onChangeText={onChangeDirection}
          value={direction}
        />
      </View>
      <View>
        <TouchableOpacity style={styles.btnRegister}>
          <Text style={styles.txtRegister}>Register</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Text: {
    padding: 15,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 20,
    fontSize: 15,
    textAlign: "center",
    marginVertical: 15,
    marginHorizontal: 40,
  },
  btnRegister: {
    marginTop: 120,
    height: 50,
    backgroundColor: "#F4F4F4",
    textAlign: "center",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "black",
    marginHorizontal: 40,
  },
  txtRegister: {
    color: "black",
    fontSize: 20,
    textAlign: "center",
    paddingTop: 12,
  },
});
