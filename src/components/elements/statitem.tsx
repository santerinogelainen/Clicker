import * as React from "react";
import {Format} from "../helpers/format";

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

interface StatProps {
    title: string;
    value: any;
    format?: boolean;
}

export class Stat extends React.Component<StatProps> {
    render() {
        return (
            <div>
				<span className="stat-title">{this.props.title}</span><span className="stat-value">{this.props.format ? Format.abbriviate(this.props.value) : this.props.value}</span>
            </div>
        );
    }
}