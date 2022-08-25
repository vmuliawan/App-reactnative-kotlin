import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
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
                <TouchableOpacity style={styles.button}>
                    <Text style={{ color: "white", textAlign: "center" }}>Sabar Register dulu</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
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
