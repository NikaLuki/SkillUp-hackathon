import { EvilIcons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { Pressable, Text } from "react-native";
import Icon from "../../common/Icon/Icon";

const MenuItem = ({ currentRoute, nav, item }) => {
    const isActive = currentRoute === item.path;

    return (
        <Pressable
            className={"w-[24%] items-center "}
            onPress={() => nav(item.path)}
        >
            <EvilIcons
                name={item.iconName}
                size={26}
                color={isActive ? "#00A19A" : " "}
            />
        </Pressable>
    );
};

export default MenuItem;
