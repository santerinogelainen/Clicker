import * as React from "react";
import {Frame} from "../elements/frame";
import {Props} from "../helpers/props";
import {NavigationButton} from "../elements/navigationbutton";
import {DayClock} from "../elements/dayclock";
import {Money} from "../elements/money";

export class NavigationFrame extends React.Component<Props> {

	showStats = () => {
		$("#map-frame").hide();
		$("#stats-frame").show();
	}

	showMap = () => {
		$("#map-frame").show();
		$("#stats-frame").hide();
	}

	showNewCompanyModal = () => {
		if (this.props.game.totalMoney >= this.props.game.companycost) {
			$("#new-company-modal").css("display", "flex");
			$("#company-name-input").focus();
		}
	}

	render() {
		return (
			<Frame frameId="navigation">
				<DayClock {...this.props}/>
				<div className="nav-buttons">
					<NavigationButton text="Stats" onClick={this.showStats}/>
					<NavigationButton text="Map" onClick={this.showMap}/>
					<NavigationButton text="New company" onClick={this.showNewCompanyModal}>
						<Money amount={this.props.game.companycost} total={this.props.game.totalMoney}/>
					</NavigationButton>
				</div>
			</Frame>
		);
	}

}