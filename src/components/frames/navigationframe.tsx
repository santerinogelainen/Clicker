import * as React from "react";
import {Frame} from "../elements/frame";
import {NavigationButton} from "../elements/navigationbutton";

export class NavigationFrame extends React.Component {

	showStats = () => {
		$("#map-frame").hide();
		$("#stats-frame").show();
	}

	showMap = () => {
		$("#map-frame").show();
		$("#stats-frame").hide();
	}

	render() {
		return (
			<Frame frameId="navigation">
				<div className="nav-buttons">
					<NavigationButton text="Stats" onClick={this.showStats}/>
					<NavigationButton text="Map" onClick={this.showMap}/>
				</div>
			</Frame>
		);
	}

}