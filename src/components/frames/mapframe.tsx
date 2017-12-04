import * as React from "react";
import {Map} from "../map";
import {SelectedCityFrame} from "./selectedcityframe";
import {MapCanvasFrame} from "./mapcanvasframe";
import {Frame} from "./frame";

interface MapFrameProps {
    map: Map;
}

export class MapFrame extends React.Component<MapFrameProps> {

    render() {
        return (
            <Frame frameId="map">
                <MapCanvasFrame map={this.props.map}/>
                <SelectedCityFrame map={this.props.map}/>
            </Frame>
        );
    }

}