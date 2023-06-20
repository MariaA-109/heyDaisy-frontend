

import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import StateContextProvider from "./stateContext";
import "./index.css";
import App from "./App";

const root = createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <StateContextProvider>
      <App />
    </StateContextProvider>
  </BrowserRouter>
);