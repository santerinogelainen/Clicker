import * as React from "react"; 
import {Modal, ModalType} from "../elements/modal";
import { Game } from "../core/game";
import {CompanyList} from "../lists/companylist";
import {Props} from "../helpers/props";

export class NewOutletModal extends React.Component<Props> {

	render() {
		return(
			<Modal type={ModalType.Cancel} id="new-outlet" onCancel={() => {return true;}} title={"New outlet in " + this.props.game.map.selected.name}>
				<CompanyList {...this.props}/>
			</Modal>
		);
	}

}