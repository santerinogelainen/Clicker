import * as React from "react";
import {Frame} from "../elements/frame";
import {Game} from "../core/game";
import {Props} from "../helpers/props";
import {StatItem} from "../elements/statitem";
import {Stats} from "../core/stats";
import {Stat} from "../elements/stat";
import {AchievementItem} from "../elements/achievementitem";
import {Achievements} from "../core/achievement";

export class StatsFrame extends React.Component<Props> {

	renderGeneral() {
		return (
			<div>
				<Stat title="Money per day (MPD): " value={this.props.game.getTotalMpd()} format={true}/>
				<Stat title="Money per click: " value={this.props.game.perClick}/>
				<Stat title="Total clicks: " value={Stats.totalClicks}/>
				<Stat title="Total money earned: " value={Stats.totalMoneyEarned} format={true}/>
				<Stat title="Cities with outlets: " value={Stats.citiesWithOutlets}/>
				<Stat title="Empty cities: " value={this.props.game.map.totalCities - Stats.citiesWithOutlets}/>
				<Stat title="Companies: " value={Stats.totalCompanies}/>
				<Stat title="Outlets: " value={Stats.totalOutlets}/>
			</div>
		);
	}

	renderAchievements() {
		let elements: Array<JSX.Element> = [];
		$.each(Achievements.JSON, (key, achievement) => {
			elements.push(<AchievementItem {...achievement} isOpened={Achievements.hasAchievement(achievement)}/>);
		});
		return elements;
	}

	render() {
		return(
			<Frame frameId="stats">
				<StatItem title="Generic stats">
					{this.renderGeneral()}
				</StatItem>
				<StatItem title="Achievements" description="Each achievement will boost your MPD by 10%.">
					<Stat title="Total achievements: " value={Achievements.all.length}/>
					<div className="achievement-container">
						{this.renderAchievements()}
					</div>
				</StatItem>
			</Frame>
		);
	}

}