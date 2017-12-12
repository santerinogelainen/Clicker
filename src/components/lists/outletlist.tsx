import * as React from "react";
import {List, ListItem} from "../elements/list";
import {Outlet} from "../core/company";
import {Props} from "../other/props";

export class OutletList extends React.Component<Props> {

	/**
	 * Upgrades an outlet
	 */
	upgradeOutlet = (e, outlet: Outlet) => {
		outlet.upgrade();
		this.props.update();
	}

	/**
	 * Shows the new outlet modal
	 */
	showNewOutletModal = () => {
		$("#new-outlet-modal").css("display", "flex");
	}

	/**
	 * Turns outlets into JSX ListItems
	 */
	outletsToItems() {
		let items = [];
		this.props.game.map.selected.outlets.forEach(outlet => {
			items.push(
				<ListItem title={outlet.name} key={outlet.name} number={outlet.amount} onClick={(e, o) => this.upgradeOutlet(e, outlet)}/>
			);
		});
		items.push(
			<ListItem title="+ New outlet" key="new-outlet" onClick={this.showNewOutletModal}/>
		);
		return items;
	}

	render() {
		return (
			<List items={this.outletsToItems()}/>
		);
	}

}