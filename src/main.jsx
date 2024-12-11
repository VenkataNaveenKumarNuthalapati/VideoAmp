import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import appStore from "./components/store/appStore.jsx";

createRoot(document.getElementById("root")).render(
    // <StrictMode>
    <Provider store={appStore}>
        <App />
    </Provider>
    // </StrictMode>,
);