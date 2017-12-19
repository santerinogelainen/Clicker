import * as React from "react";
import {Props} from "../other/props";

export class DayClock extends React.Component<Props> {

	constructor(props: Props) {
		super(props);
		this.props.game.clock.onNextDay = () => {
			this.props.update();
		}
	}

	render() {
		return (
			<div className="day-clock">
				<span className="day">{this.props.game.clock.date.getDate()}</span>/
				<span className="month">{this.props.game.clock.date.getMonth()+1}</span>/
				<span className="year">{this.props.game.clock.date.getFullYear()}</span>
			</div>
		);
	}

}