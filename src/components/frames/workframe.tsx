import * as React from "react";
import {Frame} from "./frame";
import {Game} from "../game";

interface WorkFrameProps {
    game: Game;
}

export class WorkFrame extends React.Component<WorkFrameProps> {

    work = () => {
        this.props.game.work();
        this.update();
    }

    update = () => {
        this.forceUpdate();
    }

    render() {
        return (
            <Frame frameId="work">
                <Frame frameId="total">
                    {this.props.game.totalMoney}
                </Frame>
                <Frame frameId="click">
                    <img id="work" src="./img/placeholder.png" onClick={this.work}/>
                </Frame>
            </Frame>
        );
    }
}