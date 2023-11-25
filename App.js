import { Image, View } from "react-native";
import Animated, { useSharedValue, withSpring } from "react-native-reanimated";
import { NavigationContainer } from "@react-navigation/native";

import Homepage from "./screens/Homepage";

import ReelsIcon from "./assets/svg/ReelsIcon";
import AddPost from "./assets/svg/AddPost";
import HomeIcon from "./assets/svg/HomeIcon";
import SearchIcon from "./assets/svg/SearchIcon";
import Profile from "./screens/Profile";
import { Provider } from "react-redux";
import { store } from "./store/store";
import Search from "./screens/Search";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainScreen from "./screens/MainScreen";
export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="MainScreen" component={MainScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
