import React, { useState } from "react";
import { Provider } from "react-redux";
import store from "./src/Store/cofigureStore";
import MainApp from "./src/Main";

const App = () => {
  return (
    <>
      <Provider store={store}>
        <MainApp />
      </Provider>
    </>
  );
};

export default App;
