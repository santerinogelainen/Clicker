import * as React from "react";
import {Frame} from "../elements/frame";
import {Map} from "../map";
import {CityInfoFrame} from "./cityinfoframe";
import {UpgradeInfoFrame} from "./upgradeinfoframe";

export interface SelectedCityFrameProps {
    map: Map;
    update?: Function;
}

export class SelectedCityFrame extends React.Component<SelectedCityFrameProps> {
    render() {
        return (
            <Frame frameId="selected-city">
                <CityInfoFrame map={this.props.map} update={this.props.update}/>
                <UpgradeInfoFrame map={this.props.map} update={this.props.update}/>
            </Frame>
        );
    }
}