import * as React from "react";
import {Frame} from "../elements/frame";
import {Game} from "../core/game";

interface StatsFrameProps {
	game: Game;
}

export class StatsFrame extends React.Component<StatsFrameProps> {

	render() {
		return(
			<Frame frameId="stats"></Frame>
		);
	}

}