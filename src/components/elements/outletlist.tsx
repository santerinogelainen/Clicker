import * as React from "react";
import {OutletItem, NewOutletItem} from "./outletitem";
import {Game} from "../core/game";
import {Props} from "../other/props";

export class OutletList extends React.Component<Props> {

	outletsToItems() {
		let items = [];
		this.props.game.map.selected.outlets.forEach(outlet => {
			items.push(<OutletItem outlet={outlet} key={outlet.name}/>);
		});
		return items;
	}

	render() {
		let items = this.outletsToItems();
		return (
			<div className="outlet-list">
				{items}
				<NewOutletItem game={this.props.game}/>
			</div>
		);
	}

}