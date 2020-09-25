import React from "react";
import AppNavigator from "./services/router";
import { AppProvider } from "./services/appstate.service";
import { ProductProvider } from "./services/context/product.context";

import "./App.css";

const App = (props) => {
  return (
    <>
      <AppProvider>
        <ProductProvider>
          <AppNavigator {...props} />
        </ProductProvider>
      </AppProvider>
    </>
  );
};

export default App;
