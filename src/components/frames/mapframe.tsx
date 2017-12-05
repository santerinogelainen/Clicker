import * as React from "react";
import {Map} from "../map";
import {SelectedCityFrame} from "./selectedcityframe";
import {MapCanvasFrame} from "./mapcanvasframe";
import {Frame} from "./frame";

interface MapFrameProps {
    map: Map;
}

export class MapFrame extends React.Component<MapFrameProps> {

    update = () => {
        this.forceUpdate();
    }

    render() {
        return (
            <Frame frameId="map">
                <MapCanvasFrame map={this.props.map} update={this.update}/>
                <SelectedCityFrame map={this.props.map} update={this.update}/>
            </Frame>
        );
    }

}