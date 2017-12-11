import * as React from "react";
import {Frame} from "../elements/frame";
import {Game} from "../core/game";
import {OutletList} from "../elements/outletlist";
import {Props} from "../other/props";

export class UpgradeInfoFrame extends React.Component<Props> {
    render() {
        return (
            <Frame frameId="upgrade-info">
                <OutletList game={this.props.game}/>
            </Frame>
        );
    }
}