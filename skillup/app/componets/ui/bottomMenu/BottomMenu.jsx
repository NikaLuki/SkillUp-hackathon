import React from "react";
import { View } from "react-native";
import { menuData } from "./menuData";
import MenuItem from "./MenuItem";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const BottomMenu = (props) => {
    const { bottom } = useSafeAreaInsets();

    return (
        <View
            className={
                "pt-5 px-3  flex-row justify-center  w-full bg-[#F9F9F9]"
            }
            style={{
                paddingBottom: bottom + 10
            }}
        >
            {menuData.map((item) => (
                <MenuItem item={item} key={item.path} {...props} />
            ))}
        </View>
    );
};

export default BottomMenu;
