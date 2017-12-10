import * as React from "react";
import {Frame} from "../elements/frame";
import {Map} from "../map";
import {CitySelect} from "../elements/cityselect";

interface CityInfoFrameProps {
    map: Map;
    update?: Function;
}

export class CityInfoFrame extends React.Component<CityInfoFrameProps> {
    render() {
        return (
            <Frame frameId="city-info">
                <CitySelect map={this.props.map} update={this.props.update}/>
                <Frame frameId="selected-city-icon">
                    {this.props.map.selected.icon}
                </Frame>
            </Frame>
        );
    }
}