import React from 'react';
import PropTypes from 'prop-types';
import { Item, Contact, Button } from './ContactItem.styled';

const ContactItem = ({ name, number, onDeleteContactlist }) => (
  <Item>
    <Contact>
      {name}: {number}
    </Contact>
    <Button onClick={onDeleteContactlist}>Delete</Button>
  </Item>
);

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContactlist: PropTypes.func.isRequired,
};

export default ContactItem;
