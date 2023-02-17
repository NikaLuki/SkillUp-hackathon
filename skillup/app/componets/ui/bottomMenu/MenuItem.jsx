import React from "react";
import { Pressable, Text } from "react-native";

const MenuItem = ({ currentRoute, nav, item }) => {
    const isActive = currentRoute === item.path;
    return (
        <Pressable className={"w-[24%]"} onPress={() => nav(item.path)}>
            <Text>{item.img}</Text>
        </Pressable>
    );
};

export default MenuItem;
