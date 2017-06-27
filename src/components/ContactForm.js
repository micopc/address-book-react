import React, { Component } from 'react';

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      phone: '',
    }
  }

  _handleFirstNameChange = (e) => {
    this.setState({ firstName: e.target.value });
  }

  _handleLastNameChange = (e) => {
    this.setState({ lastName: e.target.value });
  }

  _handlePhoneChange = (e) => {
    this.setState({ phone: e.target.value });
  }

  _handleFormSubmit = (e) => {
    e.preventDefault();
    this.props.saveContact(this.state)
  }

  render() {
    return (
      <div>
        <h4 className="text-center">Nuevo Contacto</h4>
        <form onSubmit={this._handleFormSubmit}>
          <div className="form-group row">
            <div className="col-md-4">
              <label htmlFor="name">Nombre:</label>
            </div>
            <div className="col-md-8">
              <input
                id="name"
                type="text"
                value={this.state.firstName}
                className="form-control"
                onChange={this._handleFirstNameChange}
              />
            </div>
          </div>
          <div className="form-group row">
            <div className="col-md-4">
              <label htmlFor="lastname">Apellido:</label>
            </div>
            <div className="col-md-8">
              <input
                id="lastname"
                type="text"
                value={this.state.lastName}
                className="form-control"
                onChange={this._handleLastNameChange}
              />
            </div>
          </div>
          <div className="form-group row">
            <div className="col-md-4">
              <label htmlFor="phone">Teléfono:</label>
            </div>
            <div className="col-md-8">
              <input 
                id="phone" 
                type="text" 
                value={this.state.phone}
                className="form-control"
                onChange={this._handlePhoneChange}
              />
            </div>
          </div>
          <button className="btn btn-primary">Guardar</button>
        </form>
      </div>
    );
  }
}

export default ContactForm;