import * as React from "react";
import {Frame} from "../elements/frame";
import {Game} from "../core/game";
import {Props} from "../helpers/props";
import {StatItem} from "../elements/statitem";
import {AchievementItem} from "../elements/achievementitem";
import * as AchievementsJSON from "../../json/achievements.json";

let Achievements = AchievementsJSON as any;

export class StatsFrame extends React.Component<Props> {

	renderAchievements() {
		let elements: Array<JSX.Element> = [];
		$.each(Achievements, (key, achievement) => {
			elements.push(<AchievementItem {...achievement} isOpened={this.props.game.hasAchievement(achievement)}/>);
		});
		return elements;
	}

	render() {
		return(
			<Frame frameId="stats">
				<StatItem title="Achievements" description="Each achievement will boost your MPD by 10%.">
					{this.renderAchievements()}
				</StatItem>
			</Frame>
		);
	}

}