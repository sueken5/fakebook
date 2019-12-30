import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createAppContainer } from "react-navigation";
import Router from "./src/router/Router";
import SafeAreaView from "react-native-safe-area-view";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <Container />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const Container = createAppContainer(Router);
