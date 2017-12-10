import * as React from "react";
import {Frame} from "../elements/frame";
import {Map} from "../map";

interface UpgradeInfoFrameProps {
    map: Map;
    update?: Function;
}

export class UpgradeInfoFrame extends React.Component<UpgradeInfoFrameProps> {
    render() {
        return (
            <Frame frameId="upgrade-info"></Frame>
        );
    }
}