import React from "react";
import { View } from "react-native";
import { menuData } from "./menuData";
import MenuItem from "./MenuItem";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const BottomMenu = ({ nav, currentRoute }) => {
    const { bottom } = useSafeAreaInsets();
    return menuData.map((item) => (
        <View
            className={"pt-5 px-3 flex-row justify-between items-center w-full"}
            style={{
                paddingBottom: bottom + 10
            }}
        >
            <MenuItem
                item={item}
                nav={nav}
                currentRoute={currentRoute}
                key={item.path}
            />
        </View>
    ));
};

export default BottomMenu;
