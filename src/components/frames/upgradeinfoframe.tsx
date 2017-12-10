import * as React from "react";
import {Frame} from "../elements/frame";
import {Map} from "../core/map";
import {OutletList} from "../elements/outletlist";

interface UpgradeInfoFrameProps {
    map: Map;
    update?: Function;
}

export class UpgradeInfoFrame extends React.Component<UpgradeInfoFrameProps> {
    render() {
        return (
            <Frame frameId="upgrade-info">
                <OutletList city={this.props.map.selected}/>
            </Frame>
        );
    }
}