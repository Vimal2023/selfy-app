import { Stack } from "expo-router";
import { StyleSheet, Text, useColorScheme, View } from "react-native";
import { Colors } from "../constants/Colors";
import { StatusBar } from "expo-status-bar";

const RootLayout = () => {
  const colorscheme = useColorScheme();
  const theme = Colors[colorscheme] ?? Colors.light;
  return (
    <>
    <StatusBar value="auto"/>
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: theme.navBackground},
        headerTintColor: theme.title,
      }}
    >
      <Stack.Screen name="index" options={{ title: "Home" }} />
      <Stack.Screen name="(auth)/login" options={{ title: "Login" }} />
      <Stack.Screen name="(auth)/register" options={{ title: "Register" }} />
    </Stack>
    </>
  );
};

export default RootLayout;

const styles = StyleSheet.create({});
