import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { StoreContext } from "./context/storeContext.js";
import store from "./store/store.js";
import App from "./components/App/App.jsx";
import "./sass/index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <StoreContext.Provider value={store}>
        <App />
      </StoreContext.Provider>
    </BrowserRouter>
  </React.StrictMode>
);
