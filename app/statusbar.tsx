import React, { Fragment } from "react";
import { SafeAreaView, StatusBar } from "react-native";

export default function CustomStatusBar({
  children,
  statusBgColor = "black",
  barStyle = "light-content",
  bgColor = "black",
}: any) {
  return (
    <Fragment>
      <StatusBar
        backgroundColor={statusBgColor}
        barStyle={barStyle}
        translucent
      />
      <SafeAreaView style={{ flex: 0, backgroundColor: "black" }} />
      <SafeAreaView style={{ flex: 1, backgroundColor: bgColor }}>
        {children}
      </SafeAreaView>
    </Fragment>
  );
}
