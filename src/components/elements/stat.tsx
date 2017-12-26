import * as React from "react";

interface StatProps {
    title: string;
    value: any;
}

export class Stat extends React.Component<StatProps> {
    render() {
        return (
            <div>
				<span className="stat-title">{this.props.title}</span><span className="stat-value">{this.props.value}</span>
            </div>
        );
    }
}