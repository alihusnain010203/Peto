import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import Colors from "../../constants/color"
import {Dimensions} from "react-native"
import { Link } from 'expo-router';
import * as WebBrowser from 'expo-web-browser'
import { useOAuth } from '@clerk/clerk-expo'
import * as Linking from 'expo-linking'

export const useWarmUpBrowser = () => {
  React.useEffect(() => {
    // Warm up the android browser to improve UX
    // https://docs.expo.dev/guides/authentication/#improving-user-experience
    void WebBrowser.warmUpAsync()
    return () => {
      void WebBrowser.coolDownAsync()
    }
  }, [])
}

WebBrowser.maybeCompleteAuthSession()

export default function index() {
  useWarmUpBrowser()

  const { startOAuthFlow } = useOAuth({ strategy: 'oauth_google' })

  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } = await startOAuthFlow({
        redirectUrl: Linking.createURL('/(tabs)/home', { scheme: 'myapp' }),
      })

      if (createdSessionId) {
        setActive!({ session: createdSessionId })
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error('OAuth error', err)
    }
  }, [])

  const { height } = Dimensions.get('window');
  return (
    <View>
      <Image source={require("../../assets/images/loginImage.png")}
        style={{
          width: "100%",
          height:  height * 0.6 ,
         
        }} />
      <View style={{
        padding: 20,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}>
        <Text style={{
          fontFamily: 'outline-bold',
          fontSize: 30,
          textAlign: "center"
        }}>Ready to make a new friend ?</Text>
        <Text style={{
          fontFamily: "outline",
          fontSize: 18,
          textAlign: "center",
          color: Colors.GRAY
        }}>
          Let's adopt the pet which you like ...🐶
        </Text>
        <Pressable
      onPress={onPress}
         style={{
          padding: 14,
          margin: 50,
          backgroundColor: Colors.PRIMARY,
          borderRadius: 10,
          display: "flex",
          width:"100%",
          justifyContent: "center",
          alignItems: "center"
        }}>
       
          <Text
            style={{
              fontFamily: "outline-bold",
              fontSize: 18,
              color: Colors.WHITE,
            }}>Get Started</Text>
           
        </Pressable>
      </View>
    </View>
  )
}