import * as React from "react";
import {Map} from "../map";
import {Frame} from "./frame";

interface MapCanvasFrameProps {
    map: Map;
    update?: Function;
}

export class MapCanvasFrame extends React.Component<MapCanvasFrameProps> {

    render() {
        return (
            <Frame frameId="canvas"></Frame>
        );
    }

}