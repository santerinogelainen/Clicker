import * as React from "react";
import {List, ListItem, ListInfo} from "../elements/list";
import {Outlet} from "../core/company";
import {Props} from "../helpers/props";
import {Format} from "../helpers/format";

export class OutletList extends React.Component<Props> {

	/**
	 * Upgrades an outlet
	 */
	upgradeOutlet = (e, outlet: Outlet) => {
		if (this.props.game.enoughMoneyFor(outlet.cost)) {
			this.props.game.useMoney(outlet.cost);
			outlet.upgrade();
			this.props.update();
		}
	}

	/**
	 * Shows the new outlet modal
	 */
	showNewOutletModal = () => {
		if (this.props.game.enoughMoneyFor(this.props.game.map.selected.cost)) {
			$("#new-outlet-modal").css("display", "flex");
		}
	}

	/**
	 * Turns outlets into JSX ListItems
	 */
	outletsToItems() {
		let items = [];
		this.props.game.companies.forEach((company) => {
			// try creating new outlet
			this.props.game.map.selected.newOutlet(company);
			let outlet = this.props.game.map.selected.outlets.get(company.key);
			items.push(
				<ListItem title={company.name} key={company.key} number={outlet.count} money={outlet.cost} total={this.props.game.totalMoney} onClick={(e, o) => this.upgradeOutlet(e, outlet)}/>
			);
		});
		return items;
	}

	render() {
		return (
			<List id="outlet" items={this.outletsToItems()}/>
		);
	}

}