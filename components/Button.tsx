import React from "react";
import {
    TouchableOpacity,
    Text,
    StyleSheet,
    TouchableOpacityProps,
} from "react-native";

interface ButtonProps extends TouchableOpacityProps {
    label: string;
    onPress: () => void;
    width?: number;
    height?: number;
}

const Button: React.FC<ButtonProps> = ({
    label,
    onPress,
    width = 245,
    height = 50,
}) => {
    return (
        <TouchableOpacity
            style={[styles.button, { width, height }]}
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
