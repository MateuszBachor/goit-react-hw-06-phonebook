import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeContact } from './../../redux/actions';
import styles from './ContactList.module.css';

const ContactList = () => {
  const contactList = useSelector(state => state.items);
  const filterState = useSelector(state => state.filter);
  console.log(filterState);
  const dispatch = useDispatch();
  const remove = id => {
    dispatch(removeContact(id));
  };
  if (filterState === null) {
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
    .filter(el => el.name.toLowerCase().includes(filterState.toLowerCase()))
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
