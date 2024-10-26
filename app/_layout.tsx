import * as SecureStore from 'expo-secure-store'
import { ClerkProvider, ClerkLoaded } from '@clerk/clerk-expo'
import { Slot, Stack } from 'expo-router'
import { useFonts } from 'expo-font'

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
  const tokenCache = {
    async getToken(key: string) {
      try {
        const item = await SecureStore.getItemAsync(key)
        if (item) {
          console.log(`${key} was used 🔐 \n`)
        } else {
          console.log('No values stored under key: ' + key)
        }
        return item
      } catch (error) {
        console.error('SecureStore get item error: ', error)
        await SecureStore.deleteItemAsync(key)
        return null
      }
    },
    async saveToken(key: string, value: string) {
      try {
        return SecureStore.setItemAsync(key, value)
      } catch (err) {
        return
      }
    },
  }

  const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!

  if (!publishableKey) {
    throw new Error(
      'Missing Publishable Key. Please set EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in your .env',
    )
  }

  return (
    <ClerkProvider tokenCache={tokenCache} publishableKey={publishableKey}>
      <ClerkLoaded>
      <Stack>
      <Stack.Screen name="index" options={{
        headerShown: false,
      }} />
      <Stack.Screen name="(auth)/sign-in" options={{
        headerShown:false
      }}/>
      
      <Stack.Screen name="(auth)/sign-up" options={{
        headerShown:false
      }}/>
     
    </Stack>
      </ClerkLoaded>
    </ClerkProvider>
  )
}