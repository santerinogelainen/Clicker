import * as React from "react";
import {Frame} from "./frame";
import {Map} from "../map";
import {CitySelect} from "../elements/cityselect";

interface CityInfoFrameProps {
    map: Map;
}

export class CityInfoFrame extends React.Component<CityInfoFrameProps> {
    render() {
        return (
            <Frame frameId="city-info">
                <CitySelect map={this.props.map}/>
            </Frame>
        );
    }
}