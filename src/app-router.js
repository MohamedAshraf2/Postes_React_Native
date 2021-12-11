import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./components/home";
import Details from "./components/details";

const Navigator = createNativeStackNavigator();
// const Navigator = createMaterialTopTabNavigator();

 const AppRouter = ()=>(
    <NavigationContainer>
    <Navigator.Navigator>
      <Navigator.Screen component={Home} name="home" />
      <Navigator.Screen component={Details} name="details" />
    </Navigator.Navigator>
  </NavigationContainer>
)
export default AppRouter;