import React from "react";

import { Link, Redirect } from "expo-router";
import { useUser } from "@clerk/clerk-expo";
import { View } from "react-native";

export default function index() {
  const { user,isLoaded } = useUser();

  if(!isLoaded){
    return null
  }
 

  return (
    <View>
      {
        user ? <Redirect href="/(tabs)/home" /> : <Redirect href="/login" />
      }
     
    </View>
  );
 
} 