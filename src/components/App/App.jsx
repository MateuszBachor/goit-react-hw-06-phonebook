import React from 'react';
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

import AddContactForm from '../AddContactForm/AddContactForm';
import FindContact from 'components/FindContact/FindContact';
import ContactList from 'components/ContactList/ContactList';
import styles from './App.module.css';

export const App = () => {
  // const handleSubmit = evt => {
  //   evt.preventDefault();
  //   const form = evt.currentTarget;
  //   const contact = {
  //     name: form.elements.contact.value,
  //     number: form.elements.number.value,
  //     id: nanoid(),
  //   };

  //   if (
  //     contacts.filter(
  //       el => el.name.toLocaleLowerCase() === contact.name.toLocaleLowerCase()
  //     ).length >= 1
  //   ) {
  //     alert(`${contact.name} is already in contacts`);
  //     return;
  //   }
  //   setContacts(() => [...contacts, contact]);
  //   form.reset();
  // };

  // const removeContact = id => {
  //   setContacts(() => contacts.filter(contact => contact.id !== id));
  // };
  // const find = event => {
  //   setFilter(() => event.target.value);
  // };

  return (
    <div className={styles.whatever}>
      <AddContactForm />
      <FindContact />
      <ContactList
      // filterValue={filter}
      // contactsArray={contacts}
      // remove={removeContact}
      />
    </div>
  );
};
