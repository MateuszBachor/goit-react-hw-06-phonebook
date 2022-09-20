import React from 'react';

import AddContactForm from '../AddContactForm/AddContactForm';
import FindContact from 'components/FindContact/FindContact';
import ContactList from 'components/ContactList/ContactList';
import styles from './App.module.css';

export const App = () => {
  return (
    <div className={styles.whatever}>
      <AddContactForm />
      <FindContact />
      <ContactList />
    </div>
  );
};
