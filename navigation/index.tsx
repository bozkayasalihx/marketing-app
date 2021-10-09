import { FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
    NavigationContainer,
    DefaultTheme,
    DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { ColorSchemeName, Pressable } from "react-native";
import { Provider } from "react-redux";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import ModalScreen from "../screens/ModalScreen";
import NotFoundScreen from "../screens/NotFoundScreen";
import TabOneScreen from "../screens/TabOneScreen";
import TabTwoScreen from "../screens/TabTwoScreen";
import {
    AuthStackParamList,
    RootStackParamList,
    RootTabParamList,
    RootTabScreenProps,
} from "../types";
import { store } from "../store";
import LoginScreen from "../screens/LoginScreen";
import AdminLoginScreen from "../screens/AdminScreen";

export default function Navigation({
    colorScheme,
}: {
    colorScheme: ColorSchemeName;
}) {
    return (
        <Provider store={store}>
            <NavigationContainer
                theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
                <RootNavigator />
            </NavigationContainer>
        </Provider>
    );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
    return (
        <Stack.Navigator initialRouteName='Auth'>
            <Stack.Screen
                name='Auth'
                component={Auth}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='Root'
                component={BottomTabNavigator}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='NotFound'
                component={NotFoundScreen}
                options={{ title: "Oops!" }}
            />
            <Stack.Group screenOptions={{ presentation: "modal" }}>
                <Stack.Screen name='Modal' component={ModalScreen} />
            </Stack.Group>
        </Stack.Navigator>
    );
}
const BottomTab = createBottomTabNavigator<RootTabParamList>();

const AuthStack = createNativeStackNavigator<AuthStackParamList>();

const Auth = () => {
    return (
        <AuthStack.Navigator initialRouteName='Login'>
            <AuthStack.Screen
                name='Login'
                component={LoginScreen}
                options={{ headerShown: false }}
            />
            <AuthStack.Screen name='Admin' component={AdminLoginScreen} />
        </AuthStack.Navigator>
    );
};

function BottomTabNavigator() {
    const colorScheme = useColorScheme();

    return (
        <BottomTab.Navigator
            initialRouteName='Admin'
            screenOptions={{
                tabBarActiveTintColor: Colors[colorScheme].tint,
            }}>
            <BottomTab.Screen
                name='Admin'
                component={TabOneScreen}
                options={({ navigation }: RootTabScreenProps<"Admin">) => ({
                    title: "Tab One",
                    tabBarIcon: ({ color }) => (
                        <TabBarIcon name='code' color={color} />
                    ),
                    headerRight: () => (
                        <Pressable
                            onPress={() => navigation.navigate("Modal")}
                            style={({ pressed }) => ({
                                opacity: pressed ? 0.5 : 1,
                            })}>
                            <FontAwesome
                                name='info-circle'
                                size={25}
                                color={Colors[colorScheme].text}
                                style={{ marginRight: 15 }}
                            />
                        </Pressable>
                    ),
                })}
            />
            <BottomTab.Screen
                name='Reyon'
                component={TabTwoScreen}
                options={{
                    title: "Tab Two",
                    tabBarIcon: ({ color }) => (
                        <TabBarIcon name='code' color={color} />
                    ),
                }}
            />
        </BottomTab.Navigator>
    );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
    name: React.ComponentProps<typeof FontAwesome>["name"];
    color: string;
}) {
    return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
