import * as React from "react";
import {Frame} from "../elements/frame";
import {Game} from "../core/game";
import {OutletList} from "../lists/outletlist";
import {Props} from "../helpers/props";

export class OutletFrame extends React.Component<Props> {
    render() {
        return (
            <Frame frameId="outlet">
                <OutletList {...this.props}/>
            </Frame>
        );
    }
}