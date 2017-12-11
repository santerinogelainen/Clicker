import {Game} from "../core/game";
import * as React from "react";
import {MapFrame} from "./mapframe";
import {Frame} from "../elements/frame";
import {NewCompanyModal} from "../modals/newcompany";
import {FirstCompanyModal} from "../modals/firstcompany";
import {WorkFrame} from "./workframe";
import {NavigationFrame} from "./navigationframe";
import {StatsFrame} from "./statsframe";
import {NewOutletModal} from "../modals/newoutlet";

export interface MainFrameProps {
    game: Game;
}

export class MainFrame extends React.Component<MainFrameProps> {

    update = () => {
        this.forceUpdate();
    }

    render() {
        return (
            <Frame frameId="main">
                <FirstCompanyModal game={this.props.game} update={this.update}/>
                <NewCompanyModal game={this.props.game} update={this.update}/>
			    <NewOutletModal game={this.props.game} update={this.update}/>,
                <Frame frameId="game">
                    <NavigationFrame/>
                    <WorkFrame game={this.props.game} update={this.update}/>
                    <StatsFrame game={this.props.game} update={this.update}/>
                    <MapFrame game={this.props.game} update={this.update}/>
                </Frame>
            </Frame>
        );
    }

}