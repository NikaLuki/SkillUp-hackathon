import React from "react";
import { Controller } from "react-hook-form";
import { TextInput, Picker, View, Text } from "react-native";
import cn from "clsx";

const ProfileInput = ({ control, placeholder, nameFiled, nameInput }) => {
    return (
        <Controller
            control={control}
            name={nameInput}
            rules={{ required: "Телефон обезателен" }}
            render={({
                field: { value, onChange, onBlur },
                fieldState: { error }
            }) => (
                <View>
                    <Text className="text-xs  font-[100px]">{nameFiled}</Text>
                    <View
                        className={cn(
                            "bg-[#FFFFFF] rounded-[50px] pb-3 pt-3 px-4 my-2",
                            !!error
                                ? "border border-red-500"
                                : "border-transparent"
                        )}
                    >
                        <TextInput
                            placeholder={placeholder}
                            value={value}
                            onChangeText={onChange}
                            onBlur={onBlur}
                            className="w-full  text-[#000000]  pl-3 "
                            style={{
                                boxShadow:
                                    "0px 10px 33px rgba(179, 230, 227, 0.43)"
                            }}
                        />
                    </View>
                </View>
            )}
        />
    );
};

export default ProfileInput;
