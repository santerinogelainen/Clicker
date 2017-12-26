import * as React from "react";
import {Format} from "../helpers/format";

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