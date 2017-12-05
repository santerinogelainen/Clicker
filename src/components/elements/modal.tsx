import * as React from "react";

export enum ModalType {
    YesNo,
    OK
}

interface ModalProps {
    type: ModalType;
    onYesClick?: () => any;
    onNoClick?: () => any;
    onOKClick?: () => any;
}

export class Modal extends React.Component<ModalProps> {

    render(){
        let button;
        if (this.props.type == ModalType.OK) {
            button = <input className="modal-button modal-button-ok" type="button" onClick={this.props.onOKClick} value="OK"/>;
        } else if (this.props.type == ModalType.YesNo) {
            button = [
                <input className="modal-button modal-button-no" type="button" onClick={this.props.onNoClick} value="No"/>,
                <input className="modal-button modal-button-yes" type="button" onClick={this.props.onYesClick} value="Yes"/>
            ];
        }
        return (
            <div className="modal-frame">
                <div className="modal-content">
                    {this.props.children}
                </div>
                <div className="modal-buttons">
                    {button}
                </div>
            </div>
        );
    }

}