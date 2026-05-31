import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { PantryProvider } from "./context/PantryContext";
import { router } from "./router";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <PantryProvider>
      <RouterProvider router={router} />
    </PantryProvider>
  </React.StrictMode>
);