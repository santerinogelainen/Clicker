import * as React from "react";
import {Company, Outlet} from "../core/company";
import {City} from "../core/city";

interface OutletItemProps {
	outlet: Outlet
	key: string;
}

export class OutletItem extends React.Component<OutletItemProps> {

	upgrade = () => {
		this.props.outlet.upgrade();
		this.forceUpdate();
	}

	render() {
		return (
			<div className="outlet-item" onClick={this.upgrade}>
				<span className="outlet-upgrade-count">{this.props.outlet.amount}</span>
				<span className="outlet-name">{this.props.outlet.name}</span>
			</div>
		);
	}

}

interface NewOutletItemProps {
	city: City
}

export class NewOutletItem extends React.Component<NewOutletItemProps> {

	openNewOutletModal = () => {

	} 

	render() {
		return (
			<div className="outlet-item new-outlet-button" onClick={this.openNewOutletModal}>
				<span className="outlet-name">+ New outlet</span>
			</div>
		);
	}
}