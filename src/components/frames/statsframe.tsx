import * as React from "react";
import {Frame} from "../elements/frame";
import {Game} from "../core/game";
import {Props} from "../other/props";

export class StatsFrame extends React.Component<Props> {

	render() {
		return(
			<Frame frameId="stats"></Frame>
		);
	}

}