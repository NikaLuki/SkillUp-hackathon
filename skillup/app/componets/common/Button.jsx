import React from "react";
import { Pressable, Text } from "react-native";
import cn from "clsx";

const Button = ({ children, className, ...props }) => {
    return (
        <Pressable
            {...props}
            className={cn(
                "self-center mt-3 bg-[#00A19A] py-3 px-8 rounded-[50px]",
                className
            )}
        >
            <Text className="font-semibold text-white ">{children}</Text>
        </Pressable>
    );
};

export default Button;
