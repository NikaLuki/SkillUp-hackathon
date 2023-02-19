import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import Button from "../../common/Button";

const HotelCard = ({ hotel }) => {
    return (
        <TouchableOpacity
            className="bg-white ml-[10px] mt-3 w-[95%] shadow-[#000] rounded-xl  "
            style={{ elevation: 3 }}
        >
            <Image
                source={{ uri: hotel.img }}
                className="w-full h-[200]  rounded-xl rounded-b-none resize"
            />
            <View className="px-5 pt-3">
                <Text className="text-base font-medium ">{hotel.title}</Text>
                <View className="flex-row  pb-5 pt-3">
                    <View className="w-2/3">
                        <Text className="text-xs font-normal  ">
                            {hotel.university}
                        </Text>
                        <Text className="text-xs font-light pt-3">
                            Продолжительность пребывания
                        </Text>
                        <Text className="text-xs font-light pt-3">
                            Питание включено
                        </Text>
                    </View>

                    <View className="flex justify-end">
                        <View>
                            <Text className="text-xs font-medium">
                                Кол-во людей: 2
                            </Text>
                            <Text className="text-xs font-medium">
                                от 100 руб. в сутки
                            </Text>
                        </View>

                        <Button>Забронировать</Button>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default HotelCard;
