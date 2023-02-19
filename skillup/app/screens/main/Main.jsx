import React from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import Button from "../../componets/common/Button";

const hotel = {
    id: "1",
    city: "Москва",
    title: "Гостиничный комплекс ДВФУ",
    img: "https://img.freepik.com/free-photo/grey-marble-column-details-on-building_1359-886.jpg?w=996&t=st=1676748761~exp=1676749361~hmac=5cf6f04e55e012669a619c7f312af8adf8aa7c829e1f54d0ab85281aa25f109b",
    university:
        "Образовательная организация ФГАОУ ВО «Дальневосточный федеральный университет»"
};

const Main = () => {
    return (
        <View className="flex-1 w-full items-center pt-10">
            {/* <TouchableOpacity className="">
                <View className="flex border border-[#d4d1d1] w-full rounded-xl p-0 bg-white">
                    <View>
                        <Image
                            source={{ uri: hotel.img }}
                            className="w-full h-[200]  rounded-xl rounded-b-none"
                        />
                    </View>
                    <View className="h-2/5 pt-5 px-5 justify-between m-0">
                        <View className="">
                            <Text className="text-base font-medium">
                                {hotel.title}
                            </Text>
                        </View>
                        <View>
                            <Text className="text-xs font-normal pt-3">
                                {hotel.university}
                            </Text>

                            <Text className="text-xs font-light pt-3">
                                Продолжительность пребывания
                            </Text>
                            <Text className="text-xs font-light pt-3">
                                Питание включено
                            </Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity> */}
            <TouchableOpacity className="bg-white  w-[90%] shadow-[#000] rounded-xl  ">
                <Image
                    source={{ uri: hotel.img }}
                    className="w-full h-[200]  rounded-xl rounded-b-none resize"
                />
                <View className="px-5 pt-3">
                    <Text className="text-base font-medium ">
                        {hotel.title}
                    </Text>
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
        </View>
    );
};

export default Main;
