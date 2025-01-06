import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "./App.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  window.innerWidth > 1000 ? (
    <App />
  ) : (
    <div className="mobile">
      <h4>
        This site is not customized for mobile devices. Experience it in a
        windows or macs.
      </h4>
    </div>
  )
);
