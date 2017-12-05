import {Game} from "../game";
import * as React from "react";
import {MapFrame} from "./mapframe";
import {Frame} from "./frame";
import {Modal, ModalType} from "../elements/modal";
import {WorkFrame} from "./workframe";

export interface MainFrameProps {
    showStartingModal: boolean;
    game: Game;
}

export class MainFrame extends React.Component<MainFrameProps> {

    createFirstCompany = () => {
        this.props.game.newCompany({
            name: $()
        });
    }

    render() {
        let modal = null;
        if (this.props.showStartingModal) {
            modal = (
                <Modal type={ModalType.OK} onOKClick={this.createFirstCompany}>
                    <input type="text"/>
                </Modal>
            );
        }
        return (
            <Modal type={ModalType.OK} onOKClick={this.createFirstCompany}>
                <input type="text"/>
            </Modal>
            <Frame frameId="main">
                <WorkFrame game={this.props.game}/>
                <MapFrame map={this.props.game.map}/>
            </Frame>
        );
    }

}