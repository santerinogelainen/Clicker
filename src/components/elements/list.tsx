import * as React from "react";

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
	onClick?: (...args) => any;
	key: any;
}

export class ListItem extends React.Component<ListItemProps> {

	private listNumber() {
		if (this.props.number != null) {
			return <span className="list-number">{this.props.number}</span>;
		}
	}

	render() {
		return (
			<div className="list-item" onClick={this.props.onClick}>
				{this.listNumber()}
				<span className="list-title">{this.props.title}</span>
			</div>
		);
	}

}