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
      <View>
        <TextInput
          style={styles.Text}
          onChangeText={onChangeEmail}
          value={email}
        />
        <TextInput
          style={styles.Text}
          onChangeText={onChangeEmail}
          value={email}
        />
        <TextInput
          style={styles.Text}
          onChangeText={onChangeEmail}
          value={email}
        />
        <TextInput
          style={styles.Text}
          onChangeText={onChangeEmail}
          value={email}
        />
        <TextInput
          style={styles.Text}
          onChangeText={onChangeEmail}
          value={email}
        />
        <TextInput
          style={styles.Text}
          onChangeText={onChangeEmail}
          value={email}
        />
      </View>
      <View>
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
  Text: {
    padding: 15,
    borderWidth: 2,
    borderColor: "black",
  },
  btnRegister: {
    textAlign: "center",
    height: 20,
    backgroundColor: "#841584",
  },
});
