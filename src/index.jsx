import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import "./assets/css/index.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const entryPoint = document.getElementById("root");
ReactDOM.createRoot(entryPoint).render(<App />);
