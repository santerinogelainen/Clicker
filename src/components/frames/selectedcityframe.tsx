import * as React from "react";
import {Frame} from "./frame";
import {Map} from "../map";
import {CityInfoFrame} from "./cityinfoframe";

export interface SelectedCityFrameProps {
    map: Map;
}

export class SelectedCityFrame extends React.Component<SelectedCityFrameProps> {
    render() {
        return (
            <Frame frameId="selected-city">
                <CityInfoFrame map={this.props.map}/>
                <Frame frameId="upgrade-info"></Frame>
            </Frame>
        );
    }
}