import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

interface ButtonProps {
    label: string;
    onPress: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, onPress }) => {
    return (
        <TouchableOpacity
            style={styles.button}
            activeOpacity={0.7}
            onPress={onPress}>
            <Text style={styles.text}>{label}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        borderRadius: 8,
        height: 50,
        width: 245,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#5390d9",
    },
    text: {
        fontSize: 18,
        color: "white",
        textTransform: "uppercase",
    },
});

export default Button;