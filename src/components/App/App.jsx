import React from 'react';
import AddContactForm from '../AddContactForm/AddContactForm';
import FindContact from 'components/FindContact/FindContact';
import ContactList from 'components/ContactList/ContactList';
import styles from './App.module.css';

export const App = () => {
  return (
    <div className={styles.smartphone}>
      <div className={styles.content}>
        <AddContactForm />

        <div className={styles.findContainer}>
          <ContactList />
        </div>
        <FindContact />
      </div>
    </div>
  );
};
