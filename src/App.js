import React, { Component } from 'react';
import './App.css';

import axios from 'axios';

import Header from './components/Header';
import Footer from './components/Footer';
import SearchBox from './components/SearchBox';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';

const API_URL = 'https://address-book-api-kfpkaqtghu.now.sh';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      searchText: '',
    };
  }

  componentDidMount() {
    this._getContacts();
  }

  _handleSearchBoxChange = (e) => {
    this.setState({ searchText: e.target.value });
  }

  _getContacts = () => {
    axios({
      method: 'GET',
      url: API_URL + '/api/contacts',
      headers: {
        'Api-Key': '1720074127',
      },
    }).then((response) => {
        console.log(response);
        this.setState({ contacts: response.data.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  _saveContact = (contact) => {
    axios({
      method: 'POST',
      url: API_URL + '/api/contacts',
      headers: {
        'Api-Key': '1720074127',
        'Content-Type': 'application/json',
      },
      data: {
        firstName: contact.firstName,
        lastName: contact.lastName,
        phone: contact.phone,
      },
    }).then((response) => {
      console.log(response);
      this._getContacts();
    })
    .catch((error) => {
      console.log(error, error.response);
    })
  }

  render() {
    const contacts = this.state.contacts.filter(contact => {
      if (contact.firstName.indexOf(this.state.searchText) > -1) {
        return true;
      }
      if (contact.lastName.indexOf(this.state.searchText) > -1) {
        return true;
      }
      return false;
    });

    return (
      <div className="app">
        <Header title="Address Book" />
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <SearchBox
                value={this.state.searchText}
                onChange={this._handleSearchBoxChange}
              />
              <br />
              <ContactList contacts={contacts} />
            </div>
            <div className="col-md-6">
              <ContactForm
                saveContact={this._saveContact}
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
