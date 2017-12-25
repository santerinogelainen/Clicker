import * as React from "react";
import {Frame} from "../elements/frame";
import {Props} from "../helpers/props";
import {PopUp} from "../elements/popup";
import {Achievement} from "../core/achievement";

export class PopUpFrame extends React.Component<Props> {

	popups: Array<JSX.Element> = [];

	constructor(props: Props) {
        super(props);
        this.props.game.onNewAchievement = (achievement: Achievement) => {
			let key = this.popups.length;
            this.popups.push(
                <PopUp title={achievement.title} description={achievement.description} onClose={() => this.removePopUp(key)} icon={achievement.icon} key={key}/>
			);
        }
	}

	removePopUp = (key: number) => {
		this.popups.splice(key, 1);
		this.props.update();
	}
	
	render() {
		return (
			<Frame frameId="pop-up">
				{this.popups}
			</Frame>
		);
	}

}