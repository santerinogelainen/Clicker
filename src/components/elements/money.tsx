import * as React from "react";
import {Format} from "../other/format";

interface MoneyProps {
	amount: number;
}

export class Money extends React.Component<MoneyProps> {

	render() {
		return (
			<div className="money">
				{Format.abbriviate(this.props.amount)}
			</div>
		);
	}

}