import React from 'react';
import styles from './FindContact.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { filter } from './../../redux/actions';

const FindContact = () => {
  const dispatch = useDispatch();
  const onChange = e => dispatch(filter(e.target.value));
  return (
    <div>
      <h2 className={styles.contactsTitle}>Contacts</h2>
      <div className={styles.findDiv}>
        <label>Find contacts by name</label>
        <input onChange={onChange} type="text" />
      </div>
    </div>
  );
};
export default FindContact;
