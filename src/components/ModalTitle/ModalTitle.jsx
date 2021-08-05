import React from 'react';
import './ModalTitle.css';

export default class ModalTitle extends React.Component {
	constructor(props) {
		super(props);

	}

	render() {
		return (
			<div className="modal__title">
				<h2 className="modal__title-header">Header</h2>
				<div
					className="modal__title-close"
					onClick={() => this.props.changeModalState(false)}
					>
					&#215;
				</div>
			</div>
		)
	}
}