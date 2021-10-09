import { FontAwesome, Entypo, MaterialIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
    DarkTheme,
    DefaultTheme,
    NavigationContainer,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { ColorSchemeName } from "react-native";
import { Provider } from "react-redux";
import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import AdminLoginScreen from "../screens/AdminScreen";
import LoginScreen from "../screens/LoginScreen";
import ReyonScreen from "../screens/ReyonScreen";
import { store } from "../store";
import {
    AuthStackParamList,
    RootStackParamList,
    RootTabParamList,
    RootTabScreenProps,
} from "../types";

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
            initialRouteName='Reyon'
            screenOptions={{
                tabBarActiveTintColor: Colors[colorScheme].tint,
            }}>
            <BottomTab.Screen
                name='Reyon'
                component={ReyonScreen}
                options={({ navigation }: RootTabScreenProps<"Admin">) => ({
                    title: "Reyon",
                    tabBarIcon: ({ color }) => (
                        <TabBarIcon name='home' color={color} />
                    ),
                })}
            />
            <BottomTab.Screen
                name='Sepet'
                component={ReyonScreen}
                options={({ navigation }: RootTabScreenProps<"Admin">) => ({
                    title: "Sepet",
                    tabBarIcon: ({ color }) => (
                        <TabBarIcon name='shopping-cart' color={color} />
                    ),
                })}
            />
            <BottomTab.Screen
                name='HesapDokumu'
                component={ReyonScreen}
                options={({ navigation }: RootTabScreenProps<"Admin">) => ({
                    title: "Hesap Dokumu",
                    tabBarIcon: ({ color }) => (
                        <Entypo name='text-document' color={color} size={30} />
                    ),
                })}
            />
            <BottomTab.Screen
                name='Admin'
                component={ReyonScreen}
                options={({ navigation }: RootTabScreenProps<"Admin">) => ({
                    title: "Admin",
                    tabBarIcon: ({ color }) => (
                        <MaterialIcons name='security' color={color} size={30} />
                    ),
                })}
            />
        </BottomTab.Navigator>
    );
}

function TabBarIcon(props: {
    name: React.ComponentProps<typeof FontAwesome>["name"];
    color: string;
}) {
    return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
