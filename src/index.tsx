import * as React from "react";
import * as ReactDOM from "react-dom";
import * as $ from "jquery";

import {MainFrame} from "./components/frames/mainframe";

ReactDOM.render(
    <MainFrame/>,
    $("#body")[0]
);