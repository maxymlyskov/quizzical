import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./styles/App.css";
import "./styles/Welcome.css";
import "./styles/Quiz.css";
import "./styles/Answer.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
