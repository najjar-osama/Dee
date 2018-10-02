import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

//import scripts
import resetEventListener from "./scripts/resetEventListener";

resetEventListener();
ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
