import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Cart from "../components/Cart";

interface ReyonScreenProps {}

const ReyonScreen: React.FC<ReyonScreenProps> = () => {
    return (
        <View style={styles.view}>
            <Text>Reyon Screen </Text>
            <Cart />
        </View>
    );
};

const styles = StyleSheet.create({
    view: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});

export default ReyonScreen;

// endpoint = https://615df41e12571a00172079c7.mockapi.io/:endpoint
