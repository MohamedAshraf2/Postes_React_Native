import React from "react";
import { NativeBaseProvider, StatusBar, View, Text } from "native-base";
import { UsersProvider } from "./src/context/context";
import AppRouter from "./src/app-router";
export default () => {
  return (
    <UsersProvider>
      <NativeBaseProvider>
        <StatusBar hidden={true} />
        <AppRouter />
      </NativeBaseProvider>
    </UsersProvider>
  );
};
