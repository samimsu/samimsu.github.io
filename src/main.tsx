import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import "./styles/font-awesome.css";
import { ThemeProvider } from "./contexts/ThemeContext.tsx";
import { BannerProvider } from "./contexts/BannerContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <BannerProvider>
          <App />
        </BannerProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
