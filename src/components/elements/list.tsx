import * as React from "react";
import {Money} from "../elements/money";
import {Props} from "../other/props";

interface ListProps {
	items: Array<ListItem>;
	id?: string;
}

export class List extends React.Component<ListProps> {

	render() {
		return (
			<div className="list" id={this.props.id != null ? this.props.id + "-list" : null}>
				{this.props.items}
			</div>
		);
	}

}

interface ListItemProps {
	title: string;
	number?: number;
	money?: number;
	total?: number;
	onClick?: (...args) => any;
	info?: JSX.Element;
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
			return <div className="list-money"><Money amount={this.props.money} total={this.props.total}/></div>
		}
	}

	showInfo = (e) => {
		if (this.props.info != null) {
			$(e.currentTarget).find(".list-info").show();
		}
	}

	hideInfo = (e) => {
		if (this.props.info != null) {
			$(e.currentTarget).find(".list-info").hide();
		}
	}

	buyable() {
		if (this.props.money != null) {
			if (this.props.total >= this.props.money) {
				return "can-upgrade";
			}
			return "cannot-upgrade";
		}
		return "";
	}

	render() {
		return (
			<div className={"list-item " + this.buyable()} onClick={this.props.onClick} onMouseOver={this.showInfo} onMouseLeave={this.hideInfo}>
				{this.props.info}
				{this.listNumber()}
				<span className="list-title">{this.props.title}</span>
				{this.listMoney()}
			</div>
		);
	}

}

export class ListInfo extends React.Component<Props> {

	hide = (e) => {
		e.stopPropagation();
		$(e.currentTarget).hide();
	}

	render() {
		return (
			<div className="list-info" onMouseOver={this.hide}>
				{this.props.children}
			</div>
		);
	}
}