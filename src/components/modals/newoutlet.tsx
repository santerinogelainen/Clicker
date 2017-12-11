import * as React from "react"; 
import {Modal, ModalType} from "../elements/modal";
import { Game } from "../core/game";
import {Props} from "../other/props";

export class NewOutletModal extends React.Component<Props> {
	
	close = () => {
		$("#new-outlet-modal").remove();
	}

	render() {
		return(
			<Modal type={ModalType.OKCancel} id="new-outlet" onCancel={this.close} title="New outlet">

			</Modal>
		);
	}

}