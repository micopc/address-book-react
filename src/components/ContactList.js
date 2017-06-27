import React from 'react';

import ContactItem from './ContactItem';

const ContactList = (props) => {
  const contacts = props.contacts
    .map(contact => (
      <ContactItem
        key={contact._id}
        firstName={contact.firstName}
        lastName={contact.lastName}
        phone={contact.phone}
      />
    ));

  return (
    <div className="list-group">
      {contacts}
    </div>
  );
};

export default ContactList;
