import React from "react";
import { EvilIcons } from "@expo/vector-icons";
import { Controller, useForm } from "react-hook-form";
import {
    Image,
    Keyboard,
    Pressable,
    Text,
    TextInput,
    TouchableWithoutFeedback,
    View
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import cn from "clsx";
import ProfileInput from "../../componets/ui/ProfileInput/ProfileSelect";
import { useAuth } from "../../hooks/useAuth";

const Profile = () => {
    const { control, handleSubmit } = useForm({ mode: "onChange" });
    const { top } = useSafeAreaInsets();
    const { logOut } = useAuth();

    const onSubmit = (data) => {
        alert(data.telefon + " " + data.university);
    };
    const onLogOut = () => {
        logOut();
    };
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View
                className={"items-center justify-between h-full"}
                style={{ paddingTop: top }}
            >
                <View className="flex-row justify-between w-full px-5 items-start">
                    <Pressable>
                        <Text className="text-xs font-[40px] underline mt-5 text-end">
                            Back
                        </Text>
                    </Pressable>
                    <View>
                        <EvilIcons name={"user"} size={300} color="#00A19A" />
                        <Text className="text-center ">
                            Колыбелькин Дмитрий Александрович
                        </Text>
                    </View>

                    <Pressable onPress={handleSubmit(onSubmit)}>
                        <Text className="text-xs font-[40px] underline mt-5 text-end">
                            Готово
                        </Text>
                    </Pressable>
                </View>

                <View className={"w-3/4"}>
                    <ProfileInput
                        control={control}
                        nameFiled="Выберите пол"
                        placeholder="Мужской"
                        nameInput="sex"
                    />
                    <Controller
                        control={control}
                        name="telefon"
                        rules={{ required: "Телефон обезателен" }}
                        render={({
                            field: { value, onChange, onBlur },
                            fieldState: { error }
                        }) => (
                            <View>
                                <Text className="text-xs  font-[100px]">
                                    Телефон:
                                </Text>
                                <View
                                    className={cn(
                                        "bg-[#FFFFFF] rounded-[50px] pb-3 pt-3 px-4 my-2",
                                        !!error
                                            ? "border border-red-500"
                                            : "border-transparent"
                                    )}
                                >
                                    <TextInput
                                        placeholder="Введите телефон"
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
                    <ProfileInput
                        control={control}
                        nameFiled="ВУЗ:"
                        placeholder="Введите название"
                        nameInput="university"
                    />
                    <ProfileInput
                        control={control}
                        nameFiled="Город проживания:"
                        placeholder="Введите город"
                        nameInput="city"
                    />
                    <ProfileInput
                        control={control}
                        nameFiled="Интересы"
                        placeholder="Напишите о себе"
                        nameInput="about"
                    />
                </View>
                <Pressable onPress={onLogOut}>
                    <Text className="text-xs font-[40px] underline mt-3 text-center">
                        Выйти из профиля
                    </Text>
                </Pressable>
            </View>
        </TouchableWithoutFeedback>
    );
};

export default Profile;
