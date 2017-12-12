import * as React from "react";

interface ListProps {
	items: Array<ListItem>
}

export class List extends React.Component<ListProps> {

	render() {
		return (
			<div className="list">
				{this.props.items}
			</div>
		);
	}

}

interface ListItemProps {
	title: string;
	number?: number;
	onClick?: (...args) => any;
	key: string;
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