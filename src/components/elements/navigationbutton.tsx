import * as React from "react";

interface NavigationButtonProps {
	text: string
	onClick: () => any;
}

export class NavigationButton extends React.Component<NavigationButtonProps> {
	render() {
		return(
			<div className="nav-button" onClick={this.props.onClick}>
				{this.props.text}
			</div>
		);
	}
}