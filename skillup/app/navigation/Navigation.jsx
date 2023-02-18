import React, { useEffect, useState } from "react";
import {
    NavigationContainer,
    useNavigationContainerRef
} from "@react-navigation/native";
import { Text, View } from "react-native";
import BottomMenu from "../componets/ui/bottomMenu/BottomMenu";
import { useAuth } from "../hooks/useAuth";
import PrivateNavigation from "./PrivateNavigation";

const Navigation = () => {
    const navRef = useNavigationContainerRef();
    const { user } = useAuth();

    const [currentRoute, setCurrentRoute] = useState(undefined);

    useEffect(() => {
        setCurrentRoute(navRef.getCurrentRoute()?.name);
        const listener = navRef.addListener("state", () =>
            setCurrentRoute(navRef.getCurrentRoute()?.name)
        );
        return () => {
            navRef.removeListener("state", listener);
        };
    }, []);

    return (
        <>
            <NavigationContainer ref={navRef}>
                <PrivateNavigation />
            </NavigationContainer>
            {user && (
                <BottomMenu currentRoute={currentRoute} nav={navRef.navigate} />
            )}
        </>
    );
};

export default Navigation;
