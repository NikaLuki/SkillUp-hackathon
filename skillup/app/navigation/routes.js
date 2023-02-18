import Main from "../screens/main/Main";
import Profile from "../screens/profile/Profile";
import Science from "../screens/science/Science";
import Search from "../screens/search/Search";

export const routes = [
    {
        name: "Menu",
        component: Main
    },
    {
        name: "Search",
        component: Search
    },
    {
        name: "Science",
        component: Science
    },
    {
        name: "Profile",
        component: Profile
    }
];
