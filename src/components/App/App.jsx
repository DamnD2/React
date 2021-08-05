import './App.css';
import React from 'react';
import Modal from '../Modal/Modal';

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {modal: false};
  }

  changeModalState = (state) => {
    this.setState({modal: state});
  }

  render() {
    return (
      <>
      <button 
        onClick={() => this.changeModalState(true)}>
        Show modal
      </button>
      {this.state.modal && <Modal changeModalState = {this.changeModalState}/>}
      </>
    )
  }
}
