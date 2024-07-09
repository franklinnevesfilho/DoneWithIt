import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {MaterialCommunityIcons} from "@expo/vector-icons";

import ListingEditScreen from "../screens/ListingEditScreen";
import FeedNavigator from "./FeedNavigator";
import AccountNavigator from "./AccountNavigator";
import NewListingBtn from "./NewListingBtn";

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
    <Tab.Navigator
        screenOptions={{
                tabBarStyle: {
                    minHeight: 100,
                },
        }}
    >
        <Tab.Screen name="Feed" component={FeedNavigator}
            options={{
                tabBarIcon: ({color, size}) =>
                    <MaterialCommunityIcons name="home" color={color} size={size} />
            }}
        />
        <Tab.Screen name="ListingEdit" component={ListingEditScreen}
            options={{
                tabBarButton: NewListingBtn
            }}
        />
        <Tab.Screen name="Account" component={AccountNavigator}
            options={{
                tabBarIcon: ({color, size}) =>
                    <MaterialCommunityIcons name="account" color={color} size={size} />
            }}
        />
    </Tab.Navigator>
);

export default AppNavigator;