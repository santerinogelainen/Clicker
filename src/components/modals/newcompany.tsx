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

    /**
     * Creates a new company with the modals inputs. Returns true if the company was created.
     */
	createCompany() {
        // get the name of the company
        let name = $("#company-name-input").val() as string;
        if (name == "") {
            name = $("#company-name-input").prop("placeholder") as string;
        }
        // get the chosen type of the company (store/restaurant/factory etc)
        let chosentype = $(".company-type-input:checked").val() as CompanyType;
        // create the company
        let company = new Company(name, chosentype);
        // add the company to the game
        let created = this.props.game.newCompany(company);
        // update view
        this.props.update();
        return created;
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