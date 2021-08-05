import React from 'react';
import ModalContent from '../ModalContent/ModalContent';
import ModalTitle from '../ModalTitle/ModalTitle';
import './Modal.css'

export default class Modal extends React.Component {
	constructor(props) {
		super(props);

	}

	render() {
		return (
			<div className="wrapper">
				<div className="modal">
					<ModalTitle changeModalState = {this.props.changeModalState}/>
					<ModalContent/>
				</div>
			</div>
		)
	}
}