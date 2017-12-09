import {Game} from "../game";
import * as React from "react";
import {MapFrame} from "./mapframe";
import {Frame} from "./frame";
import {Modal, ModalType} from "../elements/modal";
import {WorkFrame} from "./workframe";
import {NavigationFrame} from "./navigationframe";
import {StatsFrame} from "./statsframe";

export interface MainFrameProps {
    game: Game;
}

export class MainFrame extends React.Component<MainFrameProps> {

    createCompany = () => {
        let nameinput = $("#company-name-input");
        // check if company name is empty
        let cname = nameinput.val().toString();
        if (cname.length == 0) {
            alert("Company name cannot be empty.");
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

    createCompanyEnter = (e) => {
        if (e.keyCode == 13) {
            if (this.createCompany()) {
                $("#new-company-modal").hide();
            }
        }
    }

    render() {
        return (
            <Frame frameId="main">
                <Modal id="new-company" type={ModalType.OK} onOKClick={this.createCompany} title="New company">
                    <div className="input-title">Name: </div>
                    <input type="text" id="company-name-input" className="text-input" onKeyDown={this.createCompanyEnter}/>
                </Modal>
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