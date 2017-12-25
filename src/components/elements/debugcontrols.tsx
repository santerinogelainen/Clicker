import * as React from "react";
import {Props} from "../helpers/props";
import { KeyboardEvent } from "react";
import {Stats} from "../core/stats";

export class DebugControls extends React.Component<Props> {

	visible: boolean = false;

	constructor(props: Props) {
		super(props);
		document.addEventListener("keydown", this.enableOnKeyCombo);
	}

	enableOnKeyCombo = (e) => {
		if (e.ctrlKey && e.keyCode == 68) {
			e.preventDefault();
			if (this.visible) {
				$(".debug-controls").hide();
			} else {
				$(".debug-controls").show();
			}
			this.visible = !this.visible;
		}
	}

	update = () => {
		this.props.update();
	}

	add1k = () => {
		this.props.game.totalMoney += 1000;
		this.update();
	}

	add100k = () => {
		this.props.game.totalMoney += 100000;
		this.update();
	}

	printGame = () => {
		console.log(this.props.game);
	}

	printStats = () => {
		console.log(Stats);
	}

	render() {
		return (
			<div className="debug-controls">
				<DebugControl title="Update" onClick={this.update}/>
				<DebugControl title="Add 1k" onClick={this.add1k}/>
				<DebugControl title="Add 100k" onClick={this.add100k}/>
				<DebugControl title="Console.log Game" onClick={this.printGame}/>
				<DebugControl title="Console.log Stats" onClick={this.printStats}/>
			</div>
		);
	}

}

interface DebugControlProps extends Props {
	title: string;
	onClick: (...args) => any;
}

export class DebugControl extends React.Component<DebugControlProps> {
	render() {
		return (
			<div className="debug-control" onClick={this.props.onClick}>
				<span className="debug-control-title">{this.props.title}</span>
			</div>
		);
	}
}