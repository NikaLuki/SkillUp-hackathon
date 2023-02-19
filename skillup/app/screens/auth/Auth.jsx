import { Link } from "@react-navigation/native";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
    Text,
    View,
    Image,
    TouchableWithoutFeedback,
    TouchableOpacity,
    Pressable
} from "react-native";

import AuthInput from "../../componets/ui/AuthInput/AuthInput";

import { useAuth } from "../../hooks/useAuth";

const Auth = () => {
    const { control, handleSubmit } = useForm({ mode: "onChange" });
    const { singIn } = useAuth();
    const [isReg, setIsReg] = useState(false);
    const handlePress = () => {
        setIsReg(!isReg);
    };
    const onSubmit = (data) => {
        singIn(data);
    };
    return (
        <TouchableWithoutFeedback>
            <View className="w-full items-center overflow-hidden bg-[#F9F9F9]">
                <Image
                    className="h-[150px] w-[205px] mt-[13%]"
                    source={require("../../../assets/logo.png")}
                />

                <Text className="text-center font-semibold text-xl m-[5%]  text-[#447976]">
                    Программа молодежного и студенческого туризма
                </Text>

                <Text className="text-center font-normal text-2xl">
                    {!isReg ? "Вход" : "Регистрация"}
                </Text>
                <AuthInput
                    control={control}
                    nameInput={"email"}
                    placeholder="Email"
                />
                <AuthInput
                    control={control}
                    nameInput={"password"}
                    placeholder="Пароль"
                />

                <TouchableOpacity
                    onPress={handleSubmit(onSubmit)}
                    className="text-center bg-[#00A19A] rounded-full paddin p-[10px] m-[15px] flex-row  w-1/2 justify-center items-center"
                >
                    <Text className="text-l  text-white">
                        {!isReg ? "Войти" : "Регистрация"}
                    </Text>
                </TouchableOpacity>

                {!isReg ? (
                    <TouchableOpacity className="text-center bg-[#FFFFFF] border border-[#DBDBDB] rounded-full paddin p-[10px] m-[15px] flex-row  w-1/2 justify-center items-center">
                        <Image
                            className="h-[50px] w-[50px]"
                            source={require("../../../assets/gos.png")}
                        />
                        <Text className="text-xs"> Войти через госуслуги </Text>
                    </TouchableOpacity>
                ) : (
                    <></>
                )}

                <Pressable
                    className={!isReg ? "m-[20px]" : "mt-[120px]"}
                    onPress={handlePress}
                >
                    <Text className="text-l text-[#686868]">
                        {isReg ? "Вход" : "Зарегистрироваться"}{" "}
                    </Text>
                </Pressable>
            </View>
        </TouchableWithoutFeedback>
    );
};

export default Auth;
