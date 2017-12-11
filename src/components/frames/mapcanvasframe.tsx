import * as React from "react";
import {Map} from "../core/map";
import {Frame} from "../elements/frame";
import {Props} from "../other/props";

export class MapCanvasFrame extends React.Component<Props> {

    render() {
        return (
            <Frame frameId="canvas"></Frame>
        );
    }

}