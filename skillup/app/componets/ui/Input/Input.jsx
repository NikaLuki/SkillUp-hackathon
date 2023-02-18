import React from "react";
import { TextInput, View } from "react-native";

const Input = ({ ...props }) => {
    return (
        <TextInput
            type="text"
            {...props}
            className="m-0 p-0 pl-2 w-[200px] bg-[rgba(255, 255, 255, 1)] border border-[#DBDBDB] border-solid rounded-[50px] box-border w-4/5"
        />
    );
};

export default Input;
