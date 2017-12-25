import * as React from "react";

interface FrameProps {
    frameId?: string;
}

export class Frame extends React.Component<FrameProps> {
    render() {
        return <div className="frame" id={this.props.frameId != null ? this.props.frameId + "-frame" : null}>{this.props.children}</div>;
    }
}