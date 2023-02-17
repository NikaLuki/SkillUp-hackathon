import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AuthProvider from "./app/hooks/useAuth";
import Main from "./app/screens/main/Main";

export default function App() {
    return (
        <>
            <View className={"flex-1 items-center justify-center bg-white"}>
                <Main />
                <StatusBar style="light" />
            </View>
        </>
    );
}
