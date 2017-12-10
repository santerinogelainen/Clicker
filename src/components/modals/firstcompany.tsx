import * as React from "react";
import {Modal, ModalType} from "../elements/modal";
import {NewCompanyModal} from "./newcompany";

export class FirstCompanyModal extends NewCompanyModal {

	protected createCompany() {
		return super.createCompany("#first-company-name-input");
	}

	createCompanyEnter(e) {
        if (e.keyCode == 13) {
            if (this.createCompany()) {
                $("#first-company-modal").hide();
            }
        }
    }

	render() {
		return (
			<Modal id="first-company" type={ModalType.OK} onOK={() => this.createCompany()} title="Create your first company">
				<div className="input-title">Name: </div>
				<input type="text" id="first-company-name-input" className="text-input" onKeyDown={(e) => this.createCompanyEnter(e)}/>
			</Modal>
		);
	}

}