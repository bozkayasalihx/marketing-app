import React from "react";
import {
    TextInput as RNTextInput,
    View,
    StyleSheet,
    TextInputProps,
    Text,
} from "react-native";
import { Entypo as Icon } from "@expo/vector-icons";
import { ErrorMessage } from "formik";
interface TextProps extends TextInputProps {
    icon: string;
    error?: string;
    touched?: boolean;
}

const TextInput: React.FC<TextProps> = ({ icon, error, touched, ...otherProps }) => {
    const validationColor = !touched ? "#223e4b" : error ? "#FF5A5F" : "#223e4b";
    return (
        <View style={styles.view}>
            <View style={{ padding: 8 }}>
                <Icon name={icon as any} color={validationColor} size={16} />
            </View>
            <View style={{ flex: 1 }}>
                <RNTextInput
                    underlineColorAndroid='transparent'
                    placeholderTextColor='rgba(34, 62, 75, 0.7)'
                    {...otherProps}
                />
                {error ? <Text>{error}</Text> : null}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    view: {
        flexDirection: "row",
        alignItems: "center",
        height: 48,
        borderRadius: 8,
        borderColor: "#223e4b",
        borderWidth: StyleSheet.hairlineWidth,
        padding: 8,
    },
});

export default TextInput;
