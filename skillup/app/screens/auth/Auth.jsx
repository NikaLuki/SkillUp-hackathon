import { Link } from "@react-navigation/native";
import React, { useState } from "react";
import {
    Text,
    View,
    Image,
    TouchableWithoutFeedback,
    TouchableOpacity,
    Pressable
} from "react-native";
import Button from "../../componets/common/Button";
import Input from "../../componets/ui/Input/Input";

const Auth = () => {
    const [isReg, setIsReg] = useState(false);
    const handlePress = () => {
        setIsReg(!isReg);
    };

    return (
        <View className="w-full items-center overflow-hidden bg-[#F9F9F9]">
            <Image
                className="h-[150px] w-[205px] mt-[13%]"
                source={require("../../../assets/logo.png")}
            />

            <Text className="text-center font-semibold text-xl m-[5%]  text-[#447976]">
                Программа молодежного и студенческого туризма
            </Text>

            <Text className="text-center font-semibold text-2xl">
                {!isReg ? "Вход" : "Регистрация"}
            </Text>

            <Input
                name="login"
                placeholder="Логин"
                className="m-[2%] p-[10px] w-3/4 placeholder-black"
            />

            <Input
                name="pass"
                type="password"
                placeholder="Пароль"
                className="m-[2%] p-[10px] w-3/4 placeholder-black"
            />

            <TouchableOpacity className="text-center bg-[#00A19A] rounded-full paddin p-[10px] m-[15px] flex-row  w-1/2 justify-center items-center">
                <Text className="text-l  text-white">
                    {" "}
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
    );
};

export default Auth;
