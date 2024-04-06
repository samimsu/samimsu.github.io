import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import { BannerProvider } from "./contexts/BannerContext.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <BannerProvider>
        <App />
      </BannerProvider>
    </BrowserRouter>
  </React.StrictMode>
);
