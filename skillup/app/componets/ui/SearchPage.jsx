import React, { useEffect } from "react";
import { View } from "react-native";

const SearchPage = () => {
    const [hotelList, setHotelList] = useState();
    useEffect(() => {
        setHotelList([]);
    });
    return <View></View>;
};

export default SearchPage;
