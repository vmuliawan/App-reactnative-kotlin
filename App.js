import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "./screens/Login";
import Register from "./screens/Register";

const stack = createNativeStackNavigator;

function App() {
    return (
        <NavigationContainer>
            <stack.Navigator screenOptions={{ headerShown: false }}>
                <stack.Screen name="Login" component={Login}></stack.Screen>
                <stack.Screen name="Register" component={Register}></stack.Screen>
            </stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    button: {
        borderRadius: 20,
        backgroundColor: "blue",
        color: "white",
        width: 300,
        height: 40,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 20,
    },
    TextInput: {
        borderColor: "gray",
        height: 40,
        borderWidth: 2,
        padding: 10,
        borderRadius: 20,
        width: 300,
        textDecorationLine: "none",
        marginBottom: 20,
    },
    TextInput1: {
        borderColor: "gray",
        height: 40,
        borderWidth: 2,
        padding: 10,
        borderRadius: 20,
        width: 300,
        textDecorationLine: "none",
        marginBottom: 40,
    },
});

export default App;
