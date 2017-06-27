import React from 'react';

const ContactItem = (props) => (
  <div className="list-group-item">
    <p>{props.firstName}</p>
    <p>{props.lastName}</p>
    <p>{props.phone}</p>
  </div>
);

export default ContactItem;