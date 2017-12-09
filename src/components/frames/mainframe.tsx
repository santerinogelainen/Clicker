import {Game} from "../game";
import * as React from "react";
import {MapFrame} from "./mapframe";
import {Frame} from "./frame";
import {Modal, ModalType} from "../elements/modal";
import {WorkFrame} from "./workframe";

export interface MainFrameProps {
    game: Game;
}

export class MainFrame extends React.Component<MainFrameProps> {

    createCompany = () => {
        let nameinput = $("#company-name-input");
        // check if company name is empty
        let cname = nameinput.val().toString();
        if (cname.length == 0) {
            return false;
        }
        // create new company
        this.props.game.newCompany({
            name: cname
        });
        // empty name input
        nameinput.val("");
        return true;
    }

    render() {
        return (
            <Frame frameId="main">
                <Modal id="new-company" type={ModalType.OK} onOKClick={this.createCompany}>
                    <input type="text" id="company-name-input" />
                </Modal>
                <Frame frameId="game">
                    <WorkFrame game={this.props.game}/>
                    <MapFrame map={this.props.game.map}/>
                </Frame>
            </Frame>
        );
    }

}