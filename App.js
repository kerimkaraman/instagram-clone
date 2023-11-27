import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainScreen from "./screens/MainScreen";
import SinglePost from "./components/SinglePost";
import UserProfile from "./screens/UserProfile";
import MessagesScreen from "./screens/MessagesScreen";
export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="MainScreen" component={MainScreen} />
          <Stack.Screen name="SinglePost" component={SinglePost} />
          <Stack.Screen name="Profile" component={UserProfile} />
          <Stack.Screen name="Messages" component={MessagesScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
