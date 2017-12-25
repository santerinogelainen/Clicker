import * as React from "react";

interface AchievementItemProps {
	title: string;
	key?: string;
	description?: string;
	icon?: string;
	isOpened: boolean;
}

export class AchievementItem extends React.Component<AchievementItemProps> {

	defaultimg: string = "./img/placeholder.svg";

	render() {
		return (
			<div className="achievement">
				<img className="achievement-icon" src={this.props.isOpened ? this.props.icon : this.defaultimg}/>
				<div className="achievement-hover">
					<div className="achievement-title">{this.props.title}</div>
					<div className="achievement-description">{this.props.description}</div>
					<div className="achievement-triangle"/>
				</div>
			</div>
		);
	}
}