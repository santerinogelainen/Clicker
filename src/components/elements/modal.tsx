import * as React from "react";

export enum ModalType {
    YesNo,
    OK
}

interface ModalProps {
    type: ModalType;
    id: string;
    /**
     * Note! return true if you want to hide the modal after this event
     */
    onYesClick?: () => any;
    /**
     * Note! return true if you want to hide the modal after this event
     */
    onNoClick?: () => any;
    /**
     * Note! return true if you want to hide the modal after this event
     */
    onOKClick?: () => any;
}

export class Modal extends React.Component<ModalProps> {

    /**
     * Hides the modal IF clickevent returns true
     * @param clickevent Event to do when we click OK/No/Yes
     */
    hide = (e: any, clickevent: () => any) => {
        if (clickevent() === true) {
            $("#" + this.props.id + "-modal").hide();
        }
    }

    render(){
        // get button(s) from modal type
        let button;
        if (this.props.type == ModalType.OK) {
            button = <input className="modal-button modal-button-ok" type="button" onClick={(e) => this.hide(e, this.props.onOKClick)} value="OK"/>;
        } else if (this.props.type == ModalType.YesNo) {
            button = [
                <input className="modal-button modal-button-no" type="button" onClick={(e) => this.hide(e, this.props.onNoClick)} value="No"/>,
                <input className="modal-button modal-button-yes" type="button" onClick={(e) => this.hide(e, this.props.onYesClick)} value="Yes"/>
            ];
        }
        return (
            <div className="modal-bg" id={this.props.id + "-modal"}>
                <div className="modal">
                    <div className="modal-content">
                        {this.props.children}
                    </div>
                    <div className="modal-buttons">
                        {button}
                    </div>
                </div>
            </div>
        );
    }

}