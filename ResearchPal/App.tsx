import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthenticationNavigator from "./src/AuthNav";
import MainAppNavigator from "./src/HomeNav";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <NavigationContainer>
      {!isAuthenticated ? <MainAppNavigator /> : <AuthenticationNavigator />}
    </NavigationContainer>
  );
};

export default App;
