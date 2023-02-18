import React from "react";
import { useForm } from "react-hook-form";
import {
    Keyboard,
    Pressable,
    Text,
    TouchableWithoutFeedback,
    View
} from "react-native";
import Button from "../../componets/common/Button";

const Profile = () => {
    const { control, reset, handleSubmit } = useForm({ mode: "onChange" });

    const onSubmit = (data) => {};
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View className={"items-center justify-center flex-1"}>
                <View className={"w-3/4"}>
                    <Text className="text-[#000000] text-center">Profile</Text>
                    <Button onPress={handleSubmit(onSubmit)}>Send</Button>
                    <Pressable>
                        <Text className="text-xs font-[40px] underline mt-3 text-center">
                            Выйти из профиля
                        </Text>
                    </Pressable>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
};

export default Profile;
