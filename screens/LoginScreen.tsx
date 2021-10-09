import { useNavigation } from "@react-navigation/native";
import { useFormik, validateYupSchema } from "formik";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Button from "../components/Button";
import TextInput from "../components/TextInput";

interface LoginProps {}

const Login: React.FC<LoginProps> = ({}) => {
    const navigation = useNavigation();
    const { handleChange, handleSubmit, values, errors, touched, handleBlur } =
        useFormik({
            initialValues: { email: "", password: "" },
            onSubmit(values) {
                alert(JSON.stringify(values));
            },
            validate({ email, password }) {
                let errors: Record<string, string> = {};

                const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
                const valid = regex.test(email);

                if (!valid) {
                    errors.email = "gecerli email giriniz";
                }

                if (password.trim().length < 2) {
                    errors.password = "sifre 3 karakterden fazla olmali";
                }

                return errors;
            },
        });

    console.log("error", errors);

    return (
        <View style={styles.view}>
            <Text style={{ color: "#223e4b", fontSize: 20, marginBottom: 16 }}>
                User Login
            </Text>
            <View style={styles.innerView}>
                <TextInput
                    icon='mail'
                    placeholder='email giriniz'
                    autoCapitalize='none'
                    autoCompleteType='email'
                    keyboardType='email-address'
                    keyboardAppearance='dark'
                    onBlur={handleBlur("email")}
                    onChangeText={handleChange("email")}
                    error={errors.email}
                    touched={touched.email}
                />
            </View>
            <View style={styles.innerView}>
                <TextInput
                    icon='key'
                    placeholder='şifrenizi giriniz'
                    secureTextEntry
                    autoCompleteType='password'
                    autoCapitalize='none'
                    keyboardAppearance='dark'
                    onChangeText={handleChange("password")}
                    onBlur={handleBlur("password")}
                    error={errors.email}
                    touched={touched.email}
                    onSubmitEditing={() => handleSubmit()}
                />
            </View>
            <View style={{ display: "flex" }}>
                <Button label='Oturum Ac' onPress={handleSubmit} />
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate("Admin");
                    }}>
                    <Text style={{ marginTop: 10, textAlign: "center" }}>
                        Admin Giris
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    view: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    innerView: {
        paddingHorizontal: 32,
        marginBottom: 16,
        width: "100%",
    },
});

export default Login;
