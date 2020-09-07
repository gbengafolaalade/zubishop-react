import React from "react";
import AppNavigator from "./services/router";
import { AppProvider } from "./services/appstate.service";

import "./App.css";

const App = (props) => {
  return (
    <>
      <AppProvider>
        <AppNavigator {...props} />
      </AppProvider>
    </>
  );
};

export default App;
