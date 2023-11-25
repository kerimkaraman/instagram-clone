import { Image, View } from "react-native";
import Animated, { useSharedValue, withSpring } from "react-native-reanimated";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Homepage from "./screens/Homepage";
import { useTheme } from "react-native-paper";
import ReelsIcon from "./assets/svg/ReelsIcon";
import AddPost from "./assets/svg/AddPost";
import HomeIcon from "./assets/svg/HomeIcon";
import SearchIcon from "./assets/svg/SearchIcon";
import Profile from "./screens/Profile";
import { Provider } from "react-redux";
import { store } from "./store/store";

export default function App() {
  const Tab = createMaterialBottomTabNavigator();
  const theme = useTheme();
  theme.colors.secondaryContainer = "transparent";
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          labeled={false}
          initialRouteName="Home"
          activeColor="black"
          inactiveColor="black"
          barStyle={{
            backgroundColor: "#fff",
            height: 50,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Tab.Screen
            options={{
              tabBarIcon: ({ focused }) => {
                return <HomeIcon fillColor={focused ? "black" : "white"} />;
              },
            }}
            name="Home"
            component={Homepage}
          />
          <Tab.Screen
            options={{
              tabBarIcon: ({ focused }) => {
                return <SearchIcon strokeWidth={focused ? 3 : 2} />;
              },
            }}
            name="Search"
            component={Homepage}
          />
          <Tab.Screen
            options={{
              tabBarIcon: ({ focused }) => {
                return <AddPost />;
              },
            }}
            name="Post"
            component={Homepage}
          />
          <Tab.Screen
            options={{
              tabBarIcon: ({ focused }) => {
                return <ReelsIcon />;
              },
            }}
            name="Reels"
            component={Homepage}
          />
          <Tab.Screen
            initialParams={{ isUser: true }}
            options={{
              tabBarIcon: ({ focused }) => {
                return (
                  <View
                    className="rounded-full"
                    style={{
                      borderColor: focused ? "black" : "none",
                      borderWidth: focused ? 2 : 0,
                    }}
                  >
                    <Image
                      className="w-[24px] h-[24px] object-cover rounded-full"
                      source={require("./assets/pfp.png")}
                    />
                  </View>
                );
              },
            }}
            name="UserProfile"
            component={Profile}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
