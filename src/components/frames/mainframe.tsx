import * as React from "react";
import {CityFrame} from "./cityframe";
import {MapFrame} from "./mapframe";
import {WorkFrame} from "./workframe";
import {Frame} from "./frame";

export class MainFrame extends React.Component {
    render() {
        return (
            <Frame frameId="main">
                <WorkFrame/>
                <MapFrame/>
                <CityFrame/>
            </Frame>
        );
    }
}