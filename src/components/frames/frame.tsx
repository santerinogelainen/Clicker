import * as React from "react";

interface FrameProps {
    frameId?: string;
}

export class Frame extends React.Component<FrameProps> {
    render() {
        return <div className="frame" id={this.props.frameId + "-frame"}>{this.props.children}</div>;
    }
}