import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Text } from "react-native";
import { useAuth } from "../hooks/useAuth";
import { routes } from "./routes";
import Auth from "../screens/auth/Auth";

const Stack = createNativeStackNavigator();

const PrivateNavigation = () => {
    const { user } = useAuth();
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                contentStyle: {
                    backgroundColor: "#F9F9F9"
                }
            }}
        >
            {user ? (
                routes.map((route) => (
                    <Stack.Screen key={route.name} {...route} />
                ))
            ) : (
                <Stack.Screen name="Auth" component={Auth} />
            )}
        </Stack.Navigator>
    );
};

export default PrivateNavigation;
