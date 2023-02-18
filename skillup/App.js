import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StatusBar } from "expo-status-bar";
import { Text, TextInput, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AuthProvider from "./app/hooks/useAuth";
import Navigation from "./app/navigation/Navigation";
import Main from "./app/screens/main/Main";

export default function App() {
    const queryClient = new QueryClient();
    return (
        <QueryClientProvider client={queryClient}>
            <AuthProvider>
                <SafeAreaProvider>
                    <Navigation />
                </SafeAreaProvider>
            </AuthProvider>
            <StatusBar style="auto" />
        </QueryClientProvider>
    );
}
