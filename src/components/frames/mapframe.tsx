import * as React from "react";
import {Game} from "../core/game";
import {SelectedCityFrame} from "./selectedcityframe";
import {MapCanvasFrame} from "./mapcanvasframe";
import {Frame} from "../elements/frame";
import {Props} from "../helpers/props";

export class MapFrame extends React.Component<Props> {

    render() {
        return (
            <Frame frameId="map">
                <MapCanvasFrame {...this.props}/>
                <SelectedCityFrame {...this.props}/>
            </Frame>
        );
    }

}