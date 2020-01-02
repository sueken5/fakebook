import React from "react";
import { createStore } from "redux";
import { createAppContainer } from "react-navigation";
import Router from "./src/router/Router";

import { rootReducer } from "./src/redux";
import { Provider } from "react-redux";

const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
      <Container />
    </Provider>
  );
}

const Container = createAppContainer(Router);
