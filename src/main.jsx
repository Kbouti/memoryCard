import React from "react";
import ReactDOM from "react-dom/client";

import "./style.css";

import Header from "./components/header.jsx";
import Body from "./components/body.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <Body />
  </React.StrictMode>
);
