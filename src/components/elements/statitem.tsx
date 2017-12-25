import * as React from "react";

interface StatItemProps {
	title: string;
	description?: string;
}

export class StatItem extends React.Component<StatItemProps> {
	render() {
		return (
			<div className="stat-item">
				<h2 className="stat-item-title">{this.props.title}</h2>
				<div className="stat-item-description">{this.props.description}</div>
				<div className="stat-item-content">
					{this.props.children}
				</div>
			</div>
		)
	}
}