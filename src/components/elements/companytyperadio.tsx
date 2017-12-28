import * as React from "react";
import {Props} from "../helpers/props";
import {CompanyType, Company} from "../core/company";

interface CompanyTypeRadioProps extends Props {
	key?: string;
	selected?: CompanyType;
	type: CompanyType;
}

export class CompanyTypeRadio extends React.Component<CompanyTypeRadioProps> {

	render() {

		let info = Company.getTypeInfo(this.props.type);
		let isSelected = this.props.selected == this.props.type;

		return (
			<label className="company-type">
				<input type="radio" className="company-type-input" onChange={(e) => this.props.update(e)} name="companytype" value={info.key} defaultChecked={isSelected}/>
				<img className="company-type-icon" src={info.icon}/>
				<div className="company-type-title">{info.title}</div>
			</label>
		);
	}
}