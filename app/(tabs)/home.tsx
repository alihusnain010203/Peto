import { View, Text, Image } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo'
import Colors from "../../constants/color"

export default function Home() {
  const { user } = useUser();

  return (
    <View>
      <View 
        style={{
          display: "flex",
          flexDirection:"row",
          justifyContent: "space-between",
          alignItems: 'center',
          padding: 20
        }}
      >
        <Text style={{
          color: Colors.PRIMARY,
          fontFamily: "outline-semibold",
          fontSize:20
        }}>
          Hello {user?.firstName || 'Guest'}
        </Text>
        
        {user?.imageUrl ? (
          <Image 
            source={{ uri: user.imageUrl }} 
            alt='User Image' 
            style={{
              width: 25,
              height: 25,
              borderRadius: 50,
              marginTop: 10
            }} 
          />
        ) : null}
        
      </View>
    </View>
  )
}
