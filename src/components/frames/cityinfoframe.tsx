import * as React from "react";
import {Frame} from "../elements/frame";
import {Map} from "../core/map";
import {CitySelect} from "../elements/cityselect";
import {Props} from "../helpers/props";

export class CityInfoFrame extends React.Component<Props> {
    render() {
        return (
            <Frame frameId="city-info">
                <CitySelect {...this.props}/>
                <Frame frameId="selected-city-icon">
                    <img src={this.props.game.map.selected.icon} className="city-icon"/>
                </Frame>
            </Frame>
        );
    }
}