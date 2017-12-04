import * as React from "react";
import {Frame} from "./frame";
import {Map} from "../map";

interface UpgradeInfoFrameProps {
    map: Map;
}

export class UpgradeInfoFrame extends React.Component<UpgradeInfoFrameProps> {
    render() {
        return (
            <Frame frameId="upgrade-info"></Frame>
        );
    }
}