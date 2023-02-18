import { Link } from "@react-navigation/native";
import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Pressable,
} from "react-native";
import Button from "../../componets/common/Button";
import Input from "../../componets/ui/Input/Input";

const Auth = () => {
  const [isReg, setIsReg] = useState(false);
  const handlePress = () => {
    setIsReg(!isReg);
  };

  return (
    <View className="w-full items-center overflow-hidden">
      <Image
        className="h-[220px] w-[305px] mt-[10%]"
        source={require("../../../assets/logo.png")}
      />

      <Text className="text-center font-semibold text-4xl m-[5%] text-[#447976]">
        Программа молодежного и студенческого туризма
      </Text>

      <Text className="text-center font-semibold text-4xl">
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
        <Text className="text-xl"> {!isReg ? "Войти" : "Регистрация"}</Text>
      </TouchableOpacity>

      {!isReg ? (
        <TouchableOpacity className="text-center bg-[#DDDDDD] rounded-full paddin p-[10px] m-[15px] flex-row  w-1/2 justify-center items-center">
          <Image
            className="h-[50px] w-[50px]"
            source={require("../../../assets/gos.png")}
          />
          <Text className="text-xl"> Войти через госуслуги </Text>
        </TouchableOpacity>
      ) : (
        <></>
      )}

      <Pressable
        className={!isReg ? "m-[20px]" : "mt-[120px]"}
        onPress={handlePress}
      >
        <Text className="text-xl"> {isReg ? "Вход" : "Регистрация"} </Text>
      </Pressable>
    </View>
  );
};

export default Auth;
