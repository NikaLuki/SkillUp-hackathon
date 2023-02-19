import React, { useState } from "react";
import { Button, Pressable, Text, View } from "react-native";
import Layout from "../../componets/ui/Layout";
import cn from "clsx";
import SearchPage from "../../componets/ui/SearchPage";

const Search = () => {
    const [isSearch, setisSearch] = useState(true);
    const handlePress = (value) => {
        setisSearch(value);
    };
    return (
        <Layout title="Бронирование">
            <View className="flex-row mt-5 w-full  ">
                {/* <Pressable
                    id="search"
                    className={cn(
                        "w-1/2 items-center ",
                        isSearch && "border-b border-b-[#00A19A] border-solid "
                    )}
                    onPress={(e) => handlePress(true)}
                >
                    <Text className="">Поиск</Text>
                </Pressable>
                <Pressable
                    className={cn(
                        "w-1/2 items-center ",
                        !isSearch &&
                            " border-b border-b-[#00A19A] border-solid "
                    )}
                    onPress={(e) => handlePress(false)}
                >
                    <Text className="">Карта</Text>
                </Pressable> */}
            </View>
            <View className="flex-1 w-full items-center">
                <SearchPage />
            </View>
        </Layout>
    );
};

export default Search;
