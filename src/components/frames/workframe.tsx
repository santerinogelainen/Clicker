import * as React from "react";
import {Format} from "../other/format";
import {Frame} from "../elements/frame";
import {Game} from "../core/game";
import {Props} from "../other/props";

export class WorkFrame extends React.Component<Props> {

    work = () => {
        this.props.game.work();
        this.props.update();
    }

    render() {
        return (
            <Frame frameId="work">
                <Frame frameId="total">
                    <div className="total-money">{Format.abbriviate(this.props.game.totalMoney)}</div>
                    <div className="total-mpd">+{Format.abbriviate(this.props.game.mpd)} MPD</div>
                </Frame>
                <Frame frameId="click">
                    <img id="work" src="./img/placeholder.png" onClick={this.work}/>
                </Frame>
            </Frame>
        );
    }
}