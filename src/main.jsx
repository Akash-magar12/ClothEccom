import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Store from "./Components/Store.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Store>
      <App />
    </Store>
  </BrowserRouter>
);
