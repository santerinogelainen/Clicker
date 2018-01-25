import * as React from "react";
import {findDOMNode} from "react-dom";

interface PopUpProps {
	title: string;
	description: string;
	onClose?: () => any;
	autoclose?: boolean;
	autocloselength?: number; // default = 5000ms (5sec)
	key?: number | string;
	icon?: string;
}

export class PopUp extends React.Component<PopUpProps> {

	componentDidMount() {
		let element = $(findDOMNode(this));
		let height = element.height();
		element.css({
			opacity: 0,
			height: 0
		});
		element.animate({
			opacity: 1,
			height: height
		}, 200);
		if (this.props.autoclose) {
			this.setAutoclose();
		}
	}

	setAutoclose() {
		let length = this.props.autocloselength != null ? this.props.autocloselength : 5000;
		setTimeout(() => {
			this.close();
		}, length);
	}
	
	close = () => {
		// animate close effect
		$(this.refs.popup).animate({
			opacity: 0,
			height: 0
		}, 200, () => {
			// do close event
			this.props.onClose();
		});
	}

	render() {
		return (
			<div className="pop-up" ref="popup">
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