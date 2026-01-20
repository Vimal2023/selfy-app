import { Stack } from "expo-router"
import { StatusBar } from "react-native"

export default function AuthLayout() {
  const {user} = useUser()
  return (

    <>
      <StatusBar style="auto" />
      <Stack 
        screenOptions={{ headerShown: false, animation: "none" }} 
      />
    </>
  )
}