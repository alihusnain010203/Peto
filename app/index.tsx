import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import Colors from "../constants/color"
import {Dimensions} from "react-native"
import { Link } from 'expo-router';

export default function index() {
  const { height } = Dimensions.get('window');
  return (
    <View>
      <Image source={require("../assets/images/loginImage.png")}
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
        <Pressable style={{
          padding: 14,
          margin: 50,
          backgroundColor: Colors.PRIMARY,
          borderRadius: 10,
          display: "flex",
          width:"100%",
          justifyContent: "center",
          alignItems: "center"
        }}>
          <Link href="/(auth)/sign-up">
          <Text
            style={{
              fontFamily: "outline-bold",
              fontSize: 18,
              color: Colors.WHITE,
            }}>Get Started</Text>
            </Link>
        </Pressable>
      </View>
    </View>
  )
}