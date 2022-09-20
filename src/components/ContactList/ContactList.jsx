import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeContact, filter } from './../../redux/actions';
import styles from './ContactList.module.css';

const ContactList = () => {
  const contactList = useSelector(state => state.items);
  const filteState = useSelector(state => state.filter);
  console.log(filteState);
  const dispatch = useDispatch();
  const remove = id => {
    dispatch(removeContact(id));
  };
  if (filteState === null) {
    return contactList.map(contact => {
      return (
        <li className={styles.contactLi} key={contact.id}>
          {contact.name}: {contact.number}
          <button
            onClick={() => {
              remove(contact.id);
            }}
            className={styles.deleteBtn}
          >
            Delete
          </button>
        </li>
      );
    });
  }
  return contactList
    .filter(el => el.name.toLowerCase().includes(filteState.toLowerCase()))
    .map(contact => {
      return (
        <li className={styles.contactLi} key={contact.id}>
          {contact.name}: {contact.number}{' '}
          <button
            className={styles.deleteBtn}
            onClick={() => {
              remove(contact.id);
            }}
          >
            Delete
          </button>
        </li>
      );
    });
};

export default ContactList;
