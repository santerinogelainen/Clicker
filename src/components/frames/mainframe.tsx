import {Game} from "../core/game";
import * as React from "react";
import {MapFrame} from "./mapframe";
import {Frame} from "../elements/frame";
import {NewCompanyModal} from "../modals/newcompany";
import {FirstCompanyModal} from "../modals/firstcompany";
import {WorkFrame} from "./workframe";
import {NavigationFrame} from "./navigationframe";
import {StatsFrame} from "./statsframe";

export interface MainFrameProps {
    game: Game;
}

export class MainFrame extends React.Component<MainFrameProps> {

    render() {
        return (
            <Frame frameId="main">
                <FirstCompanyModal game={this.props.game}/>
                <NewCompanyModal game={this.props.game}/>
                <Frame frameId="game">
                    <NavigationFrame/>
                    <WorkFrame game={this.props.game}/>
                    <StatsFrame game={this.props.game}/>
                    <MapFrame map={this.props.game.map}/>
                </Frame>
            </Frame>
        );
    }

}