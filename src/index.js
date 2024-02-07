import { createRoot } from "react-dom/client"; // Importing createRoot from react-dom/client
import React from "react"; // Importing React is necessary for JSX
import "./index.css";
import App from "./App";

const root = createRoot(document.getElementById("root")); // Using createRoot from react-dom/client
root.render(
  <React.StrictMode>
    {" "}
    {/* Ensure React is imported */}
    <App />
  </React.StrictMode>
);
