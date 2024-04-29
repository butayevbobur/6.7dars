import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import GlobalConetextProvider from "./context/useGlobal.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <GlobalConetextProvider />
);
