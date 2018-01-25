import * as React from "react";
import {Frame} from "../elements/frame";
import {Props} from "../helpers/props";
import {PopUp} from "../elements/popup";
import {Dictionary} from "../helpers/dictionary";
import {Achievement, Achievements} from "../core/achievement";

export class PopUpFrame extends React.Component<Props> {

	popups: Dictionary<JSX.Element> = new Dictionary<JSX.Element>();

	constructor(props: Props) {
        super(props);
        Achievements.onNewAchievement = (achievement: Achievement) => {
			let key = achievement.key;
            this.popups.set(key,
                <PopUp autoclose={true} title={achievement.title} description={achievement.description} onClose={() => this.removePopUp(key)} icon={achievement.icon} key={key}/>
			);
        }
	}

	removePopUp = (key: string) => {
		this.popups.remove(key);
		this.props.update();
	}
	
	render() {
		return (
			<Frame frameId="pop-up">
				{this.popups.toArray()}
			</Frame>
		);
	}

}