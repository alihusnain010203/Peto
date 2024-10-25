import { Stack } from "expo-router";
import { useFonts } from "expo-font";
export default function RootLayout() {
  
  useFonts({
    "outline":require("../assets/fonts/Outfit-Regular.ttf"),
    "outline-bold":require("../assets/fonts/Outfit-Bold.ttf"),
    "outline-black":require("../assets/fonts/Outfit-Black.ttf"),
    "outline-extra-bold":require("../assets/fonts/Outfit-ExtraBold.ttf"),
    "outline-extra-light":require("../assets/fonts/Outfit-ExtraLight.ttf"),
    "outline-light":require("../assets/fonts/Outfit-Light.ttf"),
    "outline-medium":require("../assets/fonts/Outfit-Medium.ttf"),
    "outline-semi-bold":require("../assets/fonts/Outfit-SemiBold.ttf"),
    "outline-thin":require("../assets/fonts/Outfit-Thin.ttf"),

  })
  return (
    <Stack>
      <Stack.Screen name="index" />
      <Stack.Screen name="login/index"
      options={{
        headerShown:false
      }}
      />
    </Stack>
  );
}
