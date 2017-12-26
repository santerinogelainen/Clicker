import * as React from "react";
import {Modal, ModalType} from "../elements/modal";
import {Game} from "../core/game";
import {Props} from "../helpers/props";
import {Company, CompanyType} from "../core/company";
import {CompanyTypeRadio} from "../elements/companytype";

export class NewCompanyModal extends React.Component<Props> {

    checked: string;

	protected createCompany() {
        let nameinput = $("#company-name-input");
        let chosentype = $(".company-type-input:checked").val() as CompanyType;
        if (this.props.game.enoughMoneyFor(Company.typeinfo[chosentype].companycost)) {

            let name = nameinput.val() as string;
            if (name == "") {
                name = nameinput.prop("placeholder") as string;
            }

            // create new company
            this.props.game.useMoney(Company.typeinfo[chosentype].companycost);
            this.props.game.newCompany({
                nth: this.props.game.companies.length,
                name: name,
                type: chosentype
            });
            // empty name input
            nameinput.val("");
            this.props.update();
            return true;
        }
        return false;
    }

    createCompanyEnter(e) {
        if (e.keyCode == 13) {
            if (this.createCompany()) {
                $("#new-company-modal").hide();
            }
        }
    }

    listTypes() {
        let elems = [];
        let nth = 0;
        $.each(Company.typeinfo, (key, value) => {
            console.log(nth);
            if (!this.props.game.hasCompanyOfType(key as CompanyType)) {
                elems.push(<CompanyTypeRadio key={key} keyprop={key} title={value.title} icon={value.icon} nth={nth} update={this.updateSelectedType}/>);
                if (nth == 0 && this.checked == null) {
                    this.checked = value.title;
                }
                nth++;
            }
        });
        return elems;
    }

    updateSelectedType = (e) => {
        let selected = $(e.currentTarget).val() as CompanyType;
        this.checked = Company.typeinfo[selected].title;
        this.forceUpdate();
    }

	render() {
		return (
			<Modal id="new-company" type={ModalType.OKCancel} onCancel={() => {return true;}} onOK={() => this.createCompany()} title="New company">
                <div className="company-types">
				    <div className="input-title">Type: </div>
                    <div className="company-type-container">
                        {this.listTypes()}
                    </div>
                </div>
				<div className="input-title">Name (optional): </div>
				<input type="text" id="company-name-input" className="text-input" placeholder={this.checked} onKeyDown={(e) => this.createCompanyEnter(e)}/>
			</Modal>
		);
	}

}