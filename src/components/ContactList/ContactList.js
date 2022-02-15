import React from 'react';
import PropTypes from 'prop-types';
import { List } from './ContactList.styled';
import ContactItem from '../ContactItem/ContactItem';

const ContactList = ({ contacts, onDeleteContactlist }) => (
  <List>
    {contacts.map(({ id, name, number }) => (
      <ContactItem
        key={id}
        name={name}
        number={number}
        onDeleteContactlist={() => onDeleteContactlist(id)}
      />
    ))}
  </List>
);

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContactlist: PropTypes.func.isRequired,
};

export default ContactList;
