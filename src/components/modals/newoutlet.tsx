import * as React from "react"; 
import {Modal, ModalType} from "../elements/modal";
import { Game } from "../core/game";
import {Props} from "../other/props";

export class NewOutletModal extends React.Component<Props> {

	renderChoices() {
	}

	render() {
		return(
			<Modal type={ModalType.OKCancel} id="new-outlet" onCancel={() => {return true;}} title={"New outlet in " + this.props.game.map.selected.name}>

			</Modal>
		);
	}

}