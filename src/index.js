import React from "react";
import ReactDOM from "react-dom/client"; // ✅ Notice the '/client'
import "./index.css";
import App from "./App";

// ✅ Create a root using the new API
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
