import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import { BrowserRouter } from "react-router-dom";
import { MenuProvider } from "./context/MenuProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <MenuProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </MenuProvider>
    </AuthProvider>
  </StrictMode>
);
