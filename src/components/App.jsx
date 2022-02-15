import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, HeroTitle } from './App.styled';
import { nanoid } from 'nanoid';
import { RiContactsBookLine } from 'react-icons/ri';

import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  // Методы жизненного цикла для localStorage
  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  // Добавление контакта, проверка на повторение имени
  addContactItem = (name, number) => {
    const contact = {
      id: (this.contactId = nanoid()),
      name,
      number,
    };

    this.setState(({ contacts }) => ({
      contacts: [...contacts, contact],
    }));

    const dublicateName = this.state.contacts.find(contact => {
      return contact.name.toLowerCase() === name.toLowerCase();
    });

    if (dublicateName) {
      alert(`${name} is already in contacts.`);
    }
  };

  // Удаление контакта
  deleteContactItem = ContactItemId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(
        contact => contact.id !== ContactItemId
      ),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  // Фильтрация списка контактов
  getContactItem = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { filter } = this.state;
    const contactFilter = this.getContactItem();

    return (
      <Container>
        <HeroTitle>
          Phonebook <RiContactsBookLine />
        </HeroTitle>
        <ContactForm onSubmit={this.addContactItem} />

        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList
          contacts={contactFilter}
          onDeleteContactlist={this.deleteContactItem}
        />
      </Container>
    );
  }
}

App.propTypes = {
  state: PropTypes.arrayOf(
    PropTypes.shape({
      contacts: PropTypes.func.isRequired,
      filter: PropTypes.string.isRequired,
    })
  ),
};

export default App;
