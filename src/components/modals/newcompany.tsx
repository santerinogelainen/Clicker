import * as React from "react";
import {Modal, ModalType} from "../elements/modal";
import {Game} from "../core/game";
import {Props} from "../helpers/props";
import {Company, CompanyType} from "../core/company";
import {CompanyTypeRadio} from "../elements/companytyperadio";
import { Money } from "../elements/money";

export class NewCompanyModal extends React.Component<Props> {

    selected: CompanyType = CompanyType.Store;
    typeinfo = Company.getTypeInfo(this.selected);

	createCompany() {
        let nameinput = $("#company-name-input");
        let chosentype = $(".company-type-input:checked").val() as CompanyType;
        if (this.props.game.enoughMoneyFor(Company.getTypeInfo(chosentype).companycost)) {

            let name = nameinput.val() as string;
            if (name == "") {
                name = nameinput.prop("placeholder") as string;
            }

            let company = new Company(name, chosentype);

            // create new company
            this.props.game.useMoney(Company.getTypeInfo(chosentype).companycost);
            this.props.game.newCompany(company);
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
        let types = [];
        Company.typeinfo.forEach((value, key) => {
            if (!this.props.game.hasCompanyOfType(key as CompanyType)) {
                types.push(<CompanyTypeRadio key={key} type={key as CompanyType} selected={this.selected} update={this.updateSelectedTypeEvent}/>);
            }
        });
        return types;
    }

    updateSelectedType(type: CompanyType) {
        this.selected = type;
        this.typeinfo = Company.getTypeInfo(type);
        this.props.update();
    }

    updateSelectedTypeEvent = (e) => {
        this.updateSelectedType($(e.currentTarget).val() as CompanyType);
    }

	render() {
		return (
			<Modal id="new-company" type={ModalType.OKCancel} onCancel={() => {return true;}} onOK={() => this.createCompany()} title="New company">
                <div className="company-types">
				    <div className="input-title">Type: </div>
                    <div className="company-type-container">
                        {this.listTypes()}
                    </div>
                    <div className="company-type-stats">
                        <div className="input-title">Stats:</div>
                        <div>MPD: {this.typeinfo.basempd}</div>
                        <div>Cost: </div>
                        <Money amount={this.typeinfo.companycost} total={this.props.game.totalMoney}/>
                    </div>
                </div>
				<div className="input-title">Name (optional): </div>
				<input type="text" id="company-name-input" className="text-input" placeholder={Company.getTypeInfo(this.selected).title} onKeyDown={(e) => this.createCompanyEnter(e)}/>
			</Modal>
		);
	}

}