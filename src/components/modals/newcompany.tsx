import * as React from "react";
import {Modal, ModalType} from "../elements/modal";
import {Game} from "../core/game";
import {Props} from "../other/props";

export class NewCompanyModal extends React.Component<Props> {

	protected createCompany(inputid: string = "#company-name-input") {
        let nameinput = $(inputid);
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

    createCompanyEnter(e) {
        if (e.keyCode == 13) {
            if (this.createCompany()) {
                $("#new-company-modal").hide();
            }
        }
    }

	render() {
		return (
			<Modal id="new-company" type={ModalType.OKCancel} onCancel={() => {return true;}} onOK={() => this.createCompany()} title="New company">
				<div className="input-title">Name: </div>
				<input type="text" id="company-name-input" className="text-input" onKeyDown={(e) => this.createCompanyEnter(e)}/>
			</Modal>
		);
	}

}