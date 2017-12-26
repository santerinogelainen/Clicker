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
import {DebugControls} from "../elements/debugcontrols";
import {PopUpFrame} from "./popupframe";
import {SettingsFrame} from "./settingsframe";
import {StoreFrame} from "./storeframe";

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
                <DebugControls game={this.props.game} update={this.update}/>
                <PopUpFrame game={this.props.game} update={this.update}/>
                <NewCompanyModal game={this.props.game} update={this.update}/>
			    <NewOutletModal game={this.props.game} update={this.update}/>
                <Frame frameId="game">
                    <NavigationFrame game={this.props.game} update={this.update}/>
                    <WorkFrame game={this.props.game} update={this.update}/>
                    <StoreFrame game={this.props.game} update={this.update}/>
                    <SettingsFrame game={this.props.game} update={this.update}/>
                    <StatsFrame game={this.props.game} update={this.update}/>
                    <MapFrame game={this.props.game} update={this.update}/>
                </Frame>
            </Frame>
        );
    }

}