import React from "react";
import ReactDOM from "react-dom/client";

import MainPage from "./components/master.jsx";

import Header from "./components/header.jsx";
import Body from "./components/body.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <Body />
  </React.StrictMode>
);
