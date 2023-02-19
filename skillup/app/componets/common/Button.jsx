import React from "react";
import { Pressable, Text } from "react-native";
import cn from "clsx";

const Button = ({ children, className, ...props }) => {
    return (
        <Pressable
            {...props}
            className={cn(
                "self-center mt-3 bg-[#00A19A] py-3 rounded-xl",
                className
            )}
        >
            <Text className="font-normal text-xs text-white px-3">
                {children}
            </Text>
        </Pressable>
    );
};

export default Button;
