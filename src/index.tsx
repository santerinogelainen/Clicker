import * as React from "react";
import * as ReactDOM from "react-dom";
import * as $ from "jquery";
import {Game} from "./components/core/game";
import {MainFrame} from "./components/frames/mainframe";

let game = new Game();

ReactDOM.render(
    <MainFrame game={game}/>,
    $("#body")[0]
);