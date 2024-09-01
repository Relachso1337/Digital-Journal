import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainPage from "./pages/MainPage";
import DailyUpdatePage from "./pages/DailyUpdatePage";
import CurDate from "./components/Daily Update Page/CurDate";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main Page" component={MainPage} options={{title: 'The Succesful Man'}}/>
        <Stack.Screen name="Daily Update" component={DailyUpdatePage} options={{headerBackTitle:'Return', headerRight:CurDate}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
