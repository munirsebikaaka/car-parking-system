import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { UserProvider } from "./contexts/UserContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* 👇 Wrap the whole app in UserProvider */}
    <UserProvider>
      <App />
    </UserProvider>
  </StrictMode>
);
