import * as React from "react";
import {Money} from "../elements/money";

interface ListProps {
	items: Array<ListItem>;
	id?: string;
}

export class List extends React.Component<ListProps> {

	render() {
		return (
			<div className="list" id={this.props.id != null ? " " + this.props.id + "-list" : null}>
				{this.props.items}
			</div>
		);
	}

}

interface ListItemProps {
	title: string;
	number?: number;
	money?: number;
	onClick?: (...args) => any;
	key: any;
}

export class ListItem extends React.Component<ListItemProps> {

	private listNumber() {
		if (this.props.number != null) {
			return <span className="list-number">{this.props.number}</span>;
		}
	}

	private listMoney() {
		if (this.props.money != null) {
			return <div className="list-money"><Money amount={this.props.money}/></div>
		}
	}

	render() {
		return (
			<div className="list-item" onClick={this.props.onClick}>
				{this.listNumber()}
				<span className="list-title">{this.props.title}</span>
				{this.listMoney()}
			</div>
		);
	}

}