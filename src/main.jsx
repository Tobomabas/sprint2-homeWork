import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

const toDisplay = <App />;

createRoot(document.getElementById("root")).render(toDisplay);
