import * as React from "react";
import * as ReactDOM from "react-dom";
import {Outlet} from "../core/company";
import {NewOutletModal} from "../modals/newoutlet";
import {Game} from "../core/game";
import {Props} from "../other/props";

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

export class NewOutletItem extends React.Component<Props> {

	openNewOutletModal = () => {
		$("#new-outlet-modal").css("display", "flex");
	} 

	render() {
		return (
			<div className="outlet-item new-outlet-button" onClick={this.openNewOutletModal}>
				<span className="outlet-name">+ New outlet</span>
			</div>
		);
	}
}