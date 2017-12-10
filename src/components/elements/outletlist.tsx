import * as React from "react";
import {City} from "../core/city";
import {OutletItem, NewOutletItem} from "./outletitem";

interface OutletListProps {
	city: City;
}

export class OutletList extends React.Component<OutletListProps> {

	outletsToItems() {
		let items = [];
		this.props.city.outlets.forEach(outlet => {
			items.push(<OutletItem outlet={outlet} key={outlet.name}/>);
		});
		return items;
	}

	render() {
		let items = this.outletsToItems();
		return (
			<div className="outlet-list">
				{items}
				<NewOutletItem city={this.props.city}/>
			</div>
		);
	}

}