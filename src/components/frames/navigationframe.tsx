import * as React from "react";
import {Frame} from "../elements/frame";
import {Props} from "../helpers/props";
import {NavigationButton} from "../elements/navigationbutton";
import {DayClock} from "../elements/dayclock";
import {Money} from "../elements/money";

export class NavigationFrame extends React.Component<Props> {

	showStore = () => {
		$("#settings-frame").hide();
		$("#store-frame").show();
		$("#map-frame").hide();
		$("#stats-frame").hide();
	}

	showSettings = () => {
		$("#settings-frame").show();
		$("#store-frame").hide();
		$("#map-frame").hide();
		$("#stats-frame").hide();
	}

	showStats = () => {
		$("#settings-frame").hide();
		$("#store-frame").hide();
		$("#map-frame").hide();
		$("#stats-frame").show();
	}

	showMap = () => {
		$("#settings-frame").hide();
		$("#store-frame").hide();
		$("#map-frame").show();
		$("#stats-frame").hide();
	}

	showNewCompanyModal = () => {
		$("#new-company-modal").css("display", "flex");
	}

	render() {
		return (
			<Frame frameId="navigation">
				<DayClock {...this.props}/>
				<div className="nav-buttons">
					<NavigationButton text="Settings" onClick={this.showSettings}/>
					<NavigationButton text="Stats" onClick={this.showStats}/>
					<NavigationButton text="Store" onClick={this.showStore}/>
					<NavigationButton text="Map" onClick={this.showMap}/>
					<NavigationButton text="New company" onClick={this.showNewCompanyModal}/>
				</div>
			</Frame>
		);
	}

}