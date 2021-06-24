import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  SafeAreaView,
} from "react-native";
import axios from "axios";

const baseUrl = "http://localhost:4000/";

class RegisterScreen extends Component {
  constructor() {
    super();
    this.addProduct = this.addProduct.bind(this);
    this.state = {
      list: [],
      name: "",
      email: "",
      password: "",
      phone: "",
      direction: "",
    };
  }

  componentDidMount() {
    this.getProducts();
  }

  async getProducts() {
    try {
      const response = await axios.get(baseUrl);
      const { data } = response;
      this.setState({ list: data });
    } catch (error) {
      console.error(error);
    }
  }

  async addProduct() {
    try {
      const { name, email, password, phone, direction } = this.state;
      const response = await axios.post(baseUrl, {
        name,
        email,
        password,
        phone,
        direction,
      });
      const { data } = response;
      console.log(data);
      this.getProducts();
      this.clearInput();
    } catch (error) {
      console.error(error);
    }
  }

  clearInput() {
    this.setState({
      name: "",
      email: "",
      password: "",
      phone: "",
      direction: "",
    });
  }

  render() {
    const { list, name, email, password, phone, direction } = this.state;
    return (
      <SafeAreaView>
        <View>
          <TextInput
            style={styles.Text}
            placeholder="Name"
            onChangeText={(name) => this.setState({ name })}
            value={name}
          />

          <TextInput
            style={styles.Text}
            placeholder="Email"
            onChangeText={(email) => this.setState({ email })}
            value={email}
          />
          <TextInput
            style={styles.Text}
            placeholder="Password"
            onChangeText={(password) => this.setState({ password })}
            value={password}
          />
          <TextInput
            style={styles.Text}
            placeholder="Phone"
            onChangeText={(phone) => this.setState({ phone })}
            value={phone}
          />
          <TextInput
            style={styles.Text}
            placeholder="Direction"
            onChangeText={(direction) => this.setState({ direction })}
            value={direction}
          />

          <View>
            <TouchableOpacity
              style={styles.btnRegister}
              onPress={this.addProduct}
            >
              <Text style={styles.txtRegister}>Aceptar</Text>
            </TouchableOpacity>
          </View>

          {/*  <View style={{ flex: 1 }}>
            {list.map((product) => (
              <View key={product.id} style={styles.card}>
                <Text>{product.name}</Text>

                <Text>{product.email}</Text>
                <Text>{product.password}</Text>
                <Text>{product.phone}</Text>
                <Text>{product.direction}</Text>
              </View>
            ))}
          </View> */}
        </View>
      </SafeAreaView>
    );
  }
} //fin clase App

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
export default RegisterScreen;
