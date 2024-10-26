
import React from 'react'
import { Tabs } from 'expo-router'
import { AntDesign } from '@expo/vector-icons'
import Colors from "../../constants/color"

export default function _layout() {
  return (
   <Tabs
   screenOptions={{
    tabBarActiveTintColor:Colors.PRIMARY,
    tabBarActiveBackgroundColor:Colors.WHITE,
    tabBarInactiveTintColor:Colors.GRAY,
    tabBarInactiveBackgroundColor:Colors.WHITE,
    tabBarShowLabel:false,
   }}
   >
    <Tabs.Screen name="home" options={{
      headerShown:false,
      title:"Home",
      tabBarIcon:({color})=>   <AntDesign name="home" size={24} color="black" />


    
    }}/>
    <Tabs.Screen name="favourite" options={{
      headerShown:false,
      title:"Favourite",
      tabBarIcon:({color})=>   <AntDesign name="heart" size={24} color="black" />

    }}/>
    <Tabs.Screen name="inbox" options={{
      headerShown:false,
      title:"Inbox",
      tabBarIcon:({color})=>   <AntDesign name="message1" size={24} color="black" />

    }}/>
    <Tabs.Screen name="profile" options={{
      headerShown:false,
      title:"Profile",
      tabBarIcon:({color})=>   <AntDesign name="user" size={24} color="black" />

    }}/>

   </Tabs>
  )
}