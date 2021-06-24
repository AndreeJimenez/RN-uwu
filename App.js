import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { LoginScreen } from "./src/Views/LoginScreen";
import RegisterScreen from "./src/Views/RegisterScreen";
import Navigation from "./src/Views/Navigation";
import CardForm from "./src/pago";
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            title: "Trufas App",
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen
          name="Home"
          component={Navigation}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name="Pago"
          component={CardForm}
          options={{ header: () => null }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
