import React from "react";
import { Platform, SafeAreaView, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Layout = ({ children, title = "" }) => {
    const { top } = useSafeAreaInsets();
    return (
        <SafeAreaView className="flex-1">
            <View
                className="flex-1"
                style={{
                    paddingTop: Platform.OS === "ios" ? top / 5 : top * 1.6
                }}
            >
                <Text className=" text-xl text-center font-medium ">
                    {title}
                </Text>
                {children}
            </View>
        </SafeAreaView>
    );
};

export default Layout;
