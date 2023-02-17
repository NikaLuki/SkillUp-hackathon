import React from "react";
import { useNavigationContainerRef } from "@react-navigation/native";
import { Text, View } from "react-native";
import BottomMenu from "../componets/ui/bottomMenu/BottomMenu";
import { useAuth } from "../hooks/useAuth";

const Navigation = () => {
    const navRef = useNavigationContainerRef();
    const { currentUser } = useAuth();
    return (
        <>
            {currentUser && (
                <BottomMenu currentRoute={"A"} nav={navRef.navigate} />
            )}
        </>
    );
};

export default Navigation;
