import * as React from "react";
import {List, ListItem} from "../elements/list";
import {Company} from "../core/company";
import {City} from "../core/city";
import {Props} from "../other/props";

export class CompanyList extends React.Component<Props> {

	/**
	 * Turns companies into JSX ListItems
	 */
	companiesToItems() {
		let items = [];
		this.props.game.companies.forEach((company, index) => {
			items.push(
				<CompanyListItem key={index} index={index} company={company} {...this.props} />
			);
		});
		return items;
	}

	render() {
		return (
			<List id="company" items={this.companiesToItems()}/>
		);
	}

}

interface CompanyListItemProps extends Props {
	key: number;
	index: number;
	company: Company;
}

class CompanyListItem extends React.Component<CompanyListItemProps> {

	/**
	 * Selects an item and creates a new outlet in selected city
	 */
	selectItem = () => {
		this.props.game.map.selected.newOutlet(this.props.company);
		$("#new-outlet-modal").hide();
		this.props.update();
	}

	render() {
		return (
			<ListItem title={this.props.company.name} key={this.props.index} onClick={this.selectItem}/>
		);
	}
}