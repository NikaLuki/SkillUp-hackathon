import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
    View,
    Text,
    FlatList,
    Pressable,
    TouchableOpacity,
    Modal
} from "react-native";
import HotelCard from "./HotelCard/HotelCard";
import Input from "./Input/Input";
import Calendar from "react-native-calendars/src/calendar";

const mockList = [
    {
        id: "1",
        city: "Москва",
        title: "Гостиничный комплекс ДВФУ",
        img: "https://img.freepik.com/free-photo/grey-marble-column-details-on-building_1359-886.jpg?w=996&t=st=1676748761~exp=1676749361~hmac=5cf6f04e55e012669a619c7f312af8adf8aa7c829e1f54d0ab85281aa25f109b",
        university:
            "Образовательная организация ФГАОУ ВО «Дальневосточный федеральный университет»"
    },
    {
        id: "2",
        city: "Москва",
        title: "Гостиничный комплекс ДВФУ",
        img: "https://img.freepik.com/free-photo/grey-marble-column-details-on-building_1359-886.jpg?w=996&t=st=1676748761~exp=1676749361~hmac=5cf6f04e55e012669a619c7f312af8adf8aa7c829e1f54d0ab85281aa25f109b",
        university:
            "Образовательная организация ФГАОУ ВО «Дальневосточный федеральный университет»"
    },
    {
        id: "3",
        city: "Москва",
        title: "Гостиничный комплекс ДВФУ",
        img: "https://img.freepik.com/free-photo/grey-marble-column-details-on-building_1359-886.jpg?w=996&t=st=1676748761~exp=1676749361~hmac=5cf6f04e55e012669a619c7f312af8adf8aa7c829e1f54d0ab85281aa25f109b",
        university:
            "Образовательная организация ФГАОУ ВО «Дальневосточный федеральный университет»"
    },
    {
        id: "4",
        city: "Москва",
        title: "Гостиничный комплекс ДВФУ",
        img: "https://img.freepik.com/free-photo/grey-marble-column-details-on-building_1359-886.jpg?w=996&t=st=1676748761~exp=1676749361~hmac=5cf6f04e55e012669a619c7f312af8adf8aa7c829e1f54d0ab85281aa25f109b",
        university:
            "Образовательная организация ФГАОУ ВО «Дальневосточный федеральный университет»"
    },
    {
        id: "5",
        city: "Санкт-Петербург",
        title: "Гостиничный комплекс ДВФУ",
        img: "https://img.freepik.com/free-photo/grey-marble-column-details-on-building_1359-886.jpg?w=996&t=st=1676748761~exp=1676749361~hmac=5cf6f04e55e012669a619c7f312af8adf8aa7c829e1f54d0ab85281aa25f109b",
        university:
            "Образовательная организация ФГАОУ ВО «Дальневосточный федеральный университет»"
    }
];

const SearchPage = () => {
    const [hotelList, setHotelList] = useState(mockList);
    const [value, setValue] = useState();
    const [showModal, setShowModal] = useState(false);
    const handleChange = (val) => {
        setValue(val);
    };
    useEffect(() => {}, []);
    const filterList = value
        ? hotelList.filter((list) => list.city === value)
        : hotelList;

    const renderItem = ({ item }) => <HotelCard key={item.id} hotel={item} />;
    return (
        <View className="flex items-center w-full">
            <View className="w-full items-center bg-slate-200">
                <View className="flex w-[90%] my-5  ">
                    <Input
                        placeholder={"Введите город"}
                        value={value}
                        onChangeText={handleChange}
                        style={{ elevation: 6 }}
                        className=" py-2  bg-white border-white border-none rounded-full w-[75%] shadow-inner shadow-slate-600"
                    />
                    <TouchableOpacity onPress={() => setShowModal(true)}>
                        <Text className=" font-normal text-xs mt-3 text-gray-400 ">
                            Выберите дату
                        </Text>
                        <Text className=" font-medium text-xs mt-3">
                            19 февраля -
                        </Text>
                    </TouchableOpacity>
                </View>
                <Modal visible={showModal} animationType="fade">
                    <Calendar
                        style={{ borderRadius: 10, elevation: 4, margin: 40 }}
                        onDayPress={() => setShowModal(false)}
                    />
                </Modal>
            </View>
            <View className="w-[90%]">
                <Text className=" font-normal text-xs my-3 text-gray-400  ">
                    {filterList.length + " мест найдено"}
                </Text>
            </View>
            <FlatList
                contentContainerStyle={{ paddingBottom: 300 }}
                data={filterList}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
            />
        </View>
    );
};

export default SearchPage;
