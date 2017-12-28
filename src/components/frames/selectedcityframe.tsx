import * as React from "react";
import {Frame} from "../elements/frame";
import {Game} from "../core/game";
import {CityInfoFrame} from "./cityinfoframe";
import {OutletFrame} from "./outletframe";
import {Props} from "../helpers/props";

export class SelectedCityFrame extends React.Component<Props> {
    render() {
        return (
            <Frame frameId="selected-city">
                <CityInfoFrame {...this.props}/>
                <OutletFrame {...this.props}/>
            </Frame>
        );
    }
}