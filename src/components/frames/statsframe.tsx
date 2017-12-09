import * as React from "react";
import {Frame} from "./frame";
import {Game} from "../game";

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