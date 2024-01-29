// commonFunctions.js
import { useState } from "react";

export const useBottomNavHeight = () => {
  const [bottomNavHeight, setBottomNavHeight] = useState(0);

  const onBottomNavLayout = (event) => {
    const { height } = event.nativeEvent.layout;
    setBottomNavHeight(height);
    console.log("Bottom navigation height:", height);
  };

  return { bottomNavHeight, onBottomNavLayout };
};
