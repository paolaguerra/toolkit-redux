import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { TodoApp } from "./TodoApp";
// import { PokemonApp } from "./PokemonApp";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <TodoApp />
      {/* <App /> */}
      {/* <PokemonApp /> */}
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
