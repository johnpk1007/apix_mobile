import { Image, View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import { useState, useEffect } from "react";
import youtube_logo_drawing from "../assets/images/youtube_logo_drawing.png";
import youtube_logo_text from "../assets/images/youtube_logo_text.png";
import apix_logo_white_drawing from "../assets/images/apix_logo_white_drawing.png";
import billboard_logo_white_text from "../assets/images/billboard_logo_white_text.jpg";
import { BilboardWeek } from "@/components/billboardWeek";
import { SplashScreen } from "expo-router";

import CustomStatusBar from "./statusbar";

SplashScreen.preventAutoHideAsync();

export default function Home() {
  const [fontsLoaded, error] = useFonts({
    "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
    "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
  });
  useEffect(() => {
    if (error) throw error;

    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);

  if (!fontsLoaded) {
    return null;
  }

  if (!fontsLoaded && !error) {
    return null;
  }
  return (
    <SafeAreaView>
      <View className="bg-black flex flex-row h-[150px]">
        <View className="flex flex-row w-[50%] relative justify-end items-center h-4/5">
          <View className="flex flex-row mr-[50px] items-center">
            <Image
              source={youtube_logo_drawing}
              className="w-[30px] h-[21px]"
            />
            <Image source={youtube_logo_text} className="w-[75px] h-[25px]" />
          </View>

          <Image
            source={apix_logo_white_drawing}
            className="absolute right-[-9px] w-[18px] h-[18px]"
          />
        </View>
        <View className="flex flex-row flex-1 justify-start items-center relative h-4/5">
          <Image
            source={billboard_logo_white_text}
            className="w-[135px] h-[27px] ml-[50px]"
          />
          <BilboardWeek billboardWeek={"WEEK OF AUGUST 10, 2024"} />
        </View>
      </View>

      <StatusBar backgroundColor="black" />
    </SafeAreaView>
  );
}
