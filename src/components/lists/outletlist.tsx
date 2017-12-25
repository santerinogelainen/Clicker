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
		this.props.game.map.selected.outlets.forEach((outlet, index) => {
			let info = (
				<ListInfo>
					<div className="outlet-mpd"><span className="outlet-mpd-text">Mpd: </span><span className="outlet-mpd-number">{Format.abbriviate(outlet.mpd)}</span></div>
					<div className="outlet-per-upgrade"><span className="outlet-per-upgrade-text">Per upgrade: </span><span className="outlet-per-upgrade-number">{Format.abbriviate(outlet.basempd)}</span></div>
				</ListInfo>
			);
			items.push(
				<ListItem info={info} title={outlet.name} key={index} number={outlet.count} money={outlet.cost} total={this.props.game.totalMoney} onClick={(e, o) => this.upgradeOutlet(e, outlet)}/>
			);
		});
		if (!this.props.game.map.selected.hasAllOutlets(this.props.game.companies)) {
			items.push(
				<ListItem title="+ New outlet" key="new-outlet" onClick={this.showNewOutletModal} money={this.props.game.map.selected.cost} total={this.props.game.totalMoney}/>
			);
		}
		return items;
	}

	render() {
		return (
			<List id="outlet" items={this.outletsToItems()}/>
		);
	}

}