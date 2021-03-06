import * as React from "react";

export enum ModalType {
    YesNo,
    OKCancel,
    OK,
    Cancel
}

interface ModalProps {
    type: ModalType;
    id: string;
    title?: string;
    /**
     * Note! return true if you want to hide the modal after this event
     */
    onYes?: () => any;
    /**
     * Note! return true if you want to hide the modal after this event
     */
    onNo?: () => any;
    /**
     * Note! return true if you want to hide the modal after this event
     */
    onOK?: () => any;
    /**
     * Note! return true if you want to hide the modal after this event
     */
    onCancel?: () => any;
}

export class Modal extends React.Component<ModalProps> {

    okbutton = <button className="modal-button modal-button-ok" key="modal-ok" onClick={(e) => this.hide(e, this.props.onOK)}>OK</button>;
    cancelbutton = <button className="modal-button modal-button-cancel" key="modal-cancel" onClick={(e) => this.hide(e, this.props.onCancel)}>Cancel</button>;
    nobutton = <button className="modal-button modal-button-no" key="modal-no" onClick={(e) => this.hide(e, this.props.onNo)}>No</button>;
    yesbutton = <button className="modal-button modal-button-yes" key="modal-yes" onClick={(e) => this.hide(e, this.props.onYes)}>Yes</button>;

    /**
     * Hides the modal IF clickevent returns true
     * @param clickevent Event to do when we click OK/No/Yes
     */
    hide = (e: any, clickevent: () => any) => {
        if (clickevent() === true) {
            $("#" + this.props.id + "-modal").hide();
        }
    }

    /**
     * Returns the button(s) of this modals type
     */
    getButtonFromType() {
        let button;
        switch(this.props.type) {
            case ModalType.OK:
                button = this.okbutton;
                break;
            case ModalType.Cancel:
                button = this.cancelbutton;
                break;
            case ModalType.YesNo:
                button = [
                    this.nobutton,
                    this.yesbutton
                ];
                break;
            case ModalType.OKCancel:
                button = [
                    this.cancelbutton,
                    this.okbutton
                ];
                break;
        }
        return button;
    }

    render(){
        // get button(s) from modal type
        let button = this.getButtonFromType();

        // get title
        let title;
        if (this.props.title != null) {
            title = <div className="modal-title">{this.props.title}</div>
        }
        return (
            <div className="modal-bg" id={this.props.id + "-modal"}>
                <div className="modal">
                    {title}
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