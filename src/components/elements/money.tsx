import * as React from "react";
import {Format} from "../other/format";

interface MoneyProps {
	amount: number;
}

export class Money extends React.Component<MoneyProps> {

	render() {
		return (
			<div className="money">
				<span className="amount">{Format.abbriviate(this.props.amount)}</span>
				<img className="money-pile" src="./img/svg/money_pile_1.svg"/>
			</div>
		);
	}

}