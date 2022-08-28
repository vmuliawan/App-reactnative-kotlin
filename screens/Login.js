import React, { Component } from "react";
import { Text, View, TextInput, TouchableOpacity, Image } from "react-native";

class Login extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image
                    source={require("./assets/img/login_illust1.png")}
                    style={{ width: 200, height: 200 }}
                ></Image>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Coba Masukin nama kamu"
                    type
                ></TextInput>
                <TextInput
                    style={styles.TextInput1}
                    placeholder="Masukin Password nya ya"
                    secureTextEntry
                ></TextInput>
                <TouchableOpacity style={styles.button}>
                    <Text style={{ color: "white", textAlign: "center" }}>Gass Kann!</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate("register")}
                >
                    <Text style={{ color: "white", textAlign: "center" }}>Sabar Register dulu</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
