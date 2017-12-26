import * as React from "react";
import {Props} from "../helpers/props";

interface CompanyTypeRadioProps extends Props {
	key?: string;
	keyprop?: string;
	nth?: number;
	title: string;
	icon: string;
}

export class CompanyTypeRadio extends React.Component<CompanyTypeRadioProps> {

	render() {
		return (
			<label className="company-type">
				<input type="radio" className="company-type-input" onChange={(e) => this.props.update(e)} name="companytype" value={this.props.keyprop} defaultChecked={this.props.nth == 0 ? true : null}/>
				<img className="company-type-icon" src={this.props.icon}/>
				<div className="company-type-title">{this.props.title}</div>
			</label>
		);
	}
}