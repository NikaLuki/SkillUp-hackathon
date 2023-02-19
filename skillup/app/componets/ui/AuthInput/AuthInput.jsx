import React from "react";
import { Controller } from "react-hook-form";
import { View } from "react-native";
import Input from "../Input/Input";
import cn from "clsx";

const AuthInput = ({ control, placeholder, nameInput }) => {
    return (
        <Controller
            control={control}
            name={nameInput}
            rules={{ required: "Телефон обезателен" }}
            render={({
                field: { value, onChange, onBlur },
                fieldState: { error }
            }) => (
                <Input
                    placeholder={placeholder}
                    value={value}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    className="m-[2%] p-[10px] w-3/4 placeholder-black"
                />
            )}
        />
    );
};

export default AuthInput;
