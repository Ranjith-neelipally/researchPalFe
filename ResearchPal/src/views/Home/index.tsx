import { View, Text } from "react-native";
import React, { useState } from "react";
import { useBottomNavHeight } from "../../utils/commonFunctions";

export default function Home() {
 const { bottomNavHeight, onBottomNavLayout } = useBottomNavHeight();

  return (
    <View onLayout={onBottomNavLayout}>
      <Text>Homes</Text>
    </View>
  );
}
