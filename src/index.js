import React from "react";
import ReactDOM from "react-dom";
const dotEnv = require("dotenv");
dotEnv.config();
import "bulma";
import "./index.scss";

import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));
