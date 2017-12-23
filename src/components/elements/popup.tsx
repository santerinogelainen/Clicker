import * as React from "react";
import {findDOMNode} from "react-dom";

interface PopUpProps {
	title: string;
	description: string;
	onClose?: () => any;
	key?: number;
	icon?: string;
}

export class PopUp extends React.Component<PopUpProps> {

	componentDidMount() {
		let element = $(findDOMNode(this));
		element.animate({
			opacity: 1
		}, 200);
	}

	close = () => {
		this.props.onClose();
	}

	render() {
		return (
			<div className="pop-up">
				<div className="pop-up-close" onMouseDown={this.close}>&#x2715;</div>
				<div className="pop-up-content">
					<img className="pop-up-icon" src={this.props.icon}/>
					<div className="pop-up-text">
						<div className="pop-up-title">{this.props.title}</div>
						<div className="pop-up-description">{this.props.description}</div>
					</div>
				</div>
			</div>
		);
	}

}