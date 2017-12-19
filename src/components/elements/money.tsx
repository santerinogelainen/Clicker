import * as React from "react";
import {Format} from "../other/format";

interface MoneyProps {
	amount: number;
	total?: number;
}

export class Money extends React.Component<MoneyProps> {

	getClassName() {
		if (this.props.total >= this.props.amount) {
			return 'enough';
		}
		return 'not-enough';
	}

	render() {
		return (
			<div className="money">
				<span className={"amount " + this.getClassName()}>{Format.abbriviate(this.props.amount)}</span>
				<img className="money-pile" src="./img/svg/money_pile_1.svg"/>
			</div>
		);
	}

}